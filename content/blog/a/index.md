---
title: GraphQL Authentication With JSON Web Tokens (JWT)
date: "2015-05-01T22:12:03.284Z"
description: "Learn how to setup authentication in TypeScript GraphQL with JSON Web Tokens."
featuredImage: ./graphql-blog.jpg
tags:
  - GraphQL
  - TypeScript
  - Node
  - JavaScript
tagColors:
  - pink
  - blue
  - green
  - yellow
---

At first, authentication in GraphQL might seem a little challenging, however, if you’ve ever implemented it before in Express.js, it is quite similar.

Before we get started, here is a list of technologies we will be working with:

- TypeScript (Type Definitions)
- GraphQL (Query and Data Manipulation)
- Apollo Server Express (Node Server)
- TypeGraphQL (GraphQL Schema Definition)
- Typeorm (Query Builder)
- PostgreSQL (Database)

## **Getting Started**

To get our project up and running, we need to initialize and install our necessary NPM modules.

To initialize npm, run the command:

```
npm init -y
```

This will create a package.json file. We use the `-y` flag here to skip all the questions and let npm generate the file with information extracted from the current directory.

Next, let's install the dependencies we will be needing for our application.

**Dev Dependencies**

```
npm i nodemon ts-node typescript @types/bcryptjs @types/cookie-parser @types/jsonwebtoken -D
```

**Dependencies**

```
npm i apollo-server apollo-server-express bcryptjs class-validator cookie-parser express graphql jsonwebtoken pg reflect-metadata type-graphql typeorm
```

We will also need to include these two npm scripts in our `package.json` file for later use.

```json
"scripts": {
    "start": "nodemon --exec ts-node src/index.ts",
    "build": "tsc"
}
```

## **File Structure**

Below is the file structure our application will be using. Please create these files and folders before you continue so you can easily follow along. If for some reason you don't create them now, I will still specify the location of each file above each code snippet.

```
.
├── .env
├── .gitignore
├── ormconfig.js
├── package.json
├── tsconfig.json
└── src
   ├── index.ts
   ├── types.ts
   ├── config
   │   └── database.ts
   ├── entities
   │   └── User.ts
   ├── resolvers
   │   ├── AuthResolver.ts
   │   └── UserResolver.ts
   └── utils
       └── isAuth.ts
```

## **Global Configurations**

We will need to set up three configuration files. A `tsconfig.json`, `ormconfig.js`, and a `.env` file.

The `tsconfig.json` file is for specifying our compiler options. Since we are using Typeorm and TypeGraphQL, we must make sure `experimentalDecorators` is set to true, so that the @ before our decorators do not throw any errors.

`tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "es2018",
    "module": "commonjs",
    "lib": ["es2018", "esnext.asynciterable"],
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

Our `.env` is for our environment variables. Here, we will store configurations for our app, database, and JWT.

`.env`

```env
NODE_ENV=development
PORT=8000

# Make sure to change these settings
DB_CONNECTION=postgres
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=graphql_jwt
DB_USERNAME=postgres
DB_PASSWORD=secret

JWT_SECRET=4897924d10f744a7b60022e1b088fa0c
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90
```

Lastly, our `ormconfig.js` is for our database connection. We allow for `synchronize` to be true so that our database reflects our entities.

`ormconfig.js`

```javascript
module.exports = [
  {
    name: "development",
    type: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    entities: ["src/entities/**/*.ts"],
    migrations: ["src/migrations/**/*.ts"],
    subscribers: ["src/subscribers/**/*.ts"],
    cli: {
      entitiesDir: "src/entities",
      migrationsDir: "src/migrations",
      subscribersDir: "src/subscribers",
    },
  },
]
```

## **Database Connection**

Now that we have our database settings configured, we need to write a function to connect to the database which we will call when starting up our server.

`src/config/database.ts`

```javascript
import { getConnectionOptions, createConnection, Connection } from "typeorm"

export const connectDatabase = async () => {
  // Get connection options from ormconfig.js
  const options = await getConnectionOptions(
    process.env.NODE_ENV || "development"
  )

  // Connect to database
  await createConnection({
    ...options,
    name: "default",
  })
}
```

## **User Entity**

We now need to create our User entity. To do this, we create a class extending the Typeorm `BaseEntity`, and put all of our properties within it. Make sure to decorate the class with `@ObjectType()` and `@Entity()`, so that it denotes our class being a GraphQL type, as well as a Typeorm entity, respectively.

Notice that for each property, we have two decorators above it. The first being the TypeGraphQL decorator, and the second being the Typeorm decorator. The TypeGraphQL decorator will define our GraphQL types for us, while the Typeorm decorator defines our database columns.

`src/entities/User.ts`

```javascript
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm"
import { Int, Field, ObjectType } from "type-graphql"

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  name: string

  @Field()
  @Column({ unique: true })
  email: string

  @Field()
  @Column({ nullable: true })
  password: string

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date
}
```

## **Auth Resolver**

Now its time to get into the fun and nitty-gritty. We need to create three GraphQL mutations in this file:

1. One mutation to create a new user with the posted information and a hashed password.
2. Another mutation to log the user in and send back a JSON Web Token (JWT).
3. Lastly, a mutation to log the user out

Before we move forward with our resolvers, let's create a type definition for our context.

`src/types.ts`

```javascript
import { Request, Response } from "express"
import { User } from "./entities/User"

export type Context = {
  req: Request & { session: null },
  res: Response,
  user: User,
}
```

Now we can move onto creating the register and login mutations.

`src/resolvers/AuthResolver.ts`

```javascript
import { Resolver, Mutation, Query, Arg, Ctx } from "type-graphql"
import * as jwt from "jsonwebtoken"
import * as bcrypt from "bcryptjs"
import { ApolloError } from "apollo-server-express"
import { User } from "../entities/User"
import { Context } from "../types"

@Resolver()
export class AuthResolver {
  @Mutation(() => Boolean)
  async register(
    @Arg("name", () => String) name: string,
    @Arg("email", () => String) email: string,
    @Arg("password", () => String) password: string,
    @Arg("confirmedPassword", () => String) confirmedPassword: string
  ) {
    // Check if passwords match
    if (password !== confirmedPassword) {
      throw new ApolloError("Passwords do not match.", "401")
    }

    // Hash posted password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create new user in the database
    await User.create({ name, email, password: hashedPassword }).save()

    return true
  }

  @Mutation(() => User)
  async login(
    @Arg("email", () => String) email: string,
    @Arg("password", () => String) password: string,
    @Ctx() { res }: Context
  ) {
    const user = await User.findOne({ where: { email } })

    // No user found, throw apollo error
    if (!user) {
      throw new ApolloError(
        "We were unable to find a user with that email.",
        "401"
      )
    }

    // Compare posted password with current password
    // If false, throw apollo error
    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new ApolloError("Password is incorrect.", "401")
    }

    // Sign a new token that includes the userId,
    // and expires in the duration that we set in our .env
    const token: string = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    )

    let cookieOptions = {
      expires: new Date(
        Date.now() + +process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: false,
      secure: false,
    }

    // Cookie will only be secure when in production
    if (process.env.NODE_ENV === "production") cookieOptions.secure = true
    res.cookie("jwt", token, cookieOptions)

    return user
  }
}
```

## **Auth Middleware**

TypeGraphQL comes with an `@Authorized` decorator that serves as middleware for protecting our GraphQL queries and mutations.

Below, we are setting up the middleware functionality in the `isAuth.ts` file. This function checks if there is a current user in the context. That user is being set from the middleware we set up within our `src/index.ts` file. If there is a user in our context, we let them pass, if there's not, we throw an error.

`src/utils/isAuth.ts`

```javascript
import { AuthChecker } from "type-graphql"
import { Context } from "../types"

export const isAuth: AuthChecker<Context> = ({ context }, next) => {
  if (!context.user) {
    throw new Error("Unauthenticated")
  }

  return true
}
```

## **User Resolver**

With just about everything in place now, we need to determine if the authentication system is working. Let's create a UserResolver and a query within it to determine the current user.

`src/resolvers/UserResolver.ts`

```javascript
import { Resolver, Query, Ctx, Authorized } from "type-graphql"
import { User } from "../entities/User"

@Resolver()
export class UserResolver {
  @Authorized()
  @Query(() => User, { nullable: true })
  async currentUser(@Ctx() ctx: any) {
    if (!ctx.user) return
    const user = await User.findOne(ctx.user)
    return user
  }
}
```

## **Server Setup**

Before we can start testing, we need to set up our server, build the GraphQL schemas, and create a middleware that grabs the JWT and sets it on the request.

Normally, we would set up our server first, but for the sake of this tutorial, we are doing it last. This is so that

`src/index.ts`

```javascript
import 'reflect-metadata';
import * as express from 'express';
import * as cookieParser from 'cookie-parser';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { verify } from 'jsonwebtoken';
import { connectDatabase } from './config/database';
import { isAuth } from './utils/isAuth';
import { AuthResolver } from './resolvers/AuthResolver';
import { UserResolver } from './resolvers/UserResolver';

(async () => {
    await connectDatabase();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
			resolvers: [AuthResolver, UserResolver],
			authChecker: isAuth
        }),
        context: (ctx) => {
            const user = (ctx?.req as any)?.user;
            return { req: ctx.req, res: ctx.res, user };
        }
    });

    const app = express();

    app.use(cookieParser());

    app.use((req, _, next) => {
        const token = req.cookies['jwt'];
        try {
            const data = verify(token, process.env.JWT_SECRET) as any;
            (req as any).user = data.userId;
        } catch {}
        next();
    });

    apolloServer.applyMiddleware({ app });

    const port = process.env.PORT || 4000;
    app.listen(port, () => {
        console.log(`server started at http://localhost:${port}/graphql`);
    });
})();
```

## **Testing Our Authentication**

Now that all of our bits and pieces are in place, let's start up our server and run our mutations and queries from the GraphQL playground.

To start up the server, run the `npm start` command, which is in our package.json.

Next, go to `http://localhost:8000/graphql`. If you are running the server on a different port, make sure to change from port 8000 to whatever you are using.

**Registering**
Let's now register a user. To do this, we need to call the register mutation and pass in our name, email, password, and confirmedPassword.

![GraphQL Register Mutation](https://dev-to-uploads.s3.amazonaws.com/i/o6nvl5uwzn1xysedx68r.png)

Once you do this, hit the play button in the middle of the screen. If everything worked properly, you will see a json object with a register property equal to true.

**Logging in**
Now that we have registered a user, we will need to log in. To do this, call the login mutation while passing in the email and password of the user we just created. We will also need to select the id, name, and email since we are expecting a user in the response.

![GraphQL Login Mutation](https://dev-to-uploads.s3.amazonaws.com/i/qc6k1g7oszsddadu9zat.png)

If successfully logged in, we will see the user's data in the response. A cookie will also be set in the browser storing our JWT.

**Fetching current user**
Assuming that you have already logged in, you can get your data by querying the current user.

![currentUser GraphQL query](https://dev-to-uploads.s3.amazonaws.com/i/speueb5jmgd6j31rf6y6.png)

## **Bonus**

We have our authentication in place now, but you may wonder how we log the current user out. To do this, we create a logout query that resets the user's JWT cookie, as well as remove the user from the context.
`src/resolvers/UserResolver.ts`

```javascript
@Query(() => Boolean)
async logout(@Ctx() ctx: Context) {
    ctx.user = null;
    ctx.res.cookie('jwt', '');

    return true;
}
```

If we go to our GraphQL playground, login and query the currentUser, we will get a user in the response. Now, run the logout query and you will get a response of true. If you go back and run the currentUser query, you will get a response with a message of `Unauthenticated`. This means we have successfully logged out.

## **Thanks for reading!**

Have any questions regarding this tutorial? Feel free to reach out to me on twitter [@ianmtrent](https://twitter.com/ianmtrent)
