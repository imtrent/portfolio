import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/Projects"

const BlogIndex = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      blogs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      ) {
        nodes {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            tagColors
          }
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.blogs.nodes
  console.log(posts)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Software Developer"
        description="Ian Trent &mdash; Software Developer based in Lafayette, Indiana."
      />
      <section className="contain mt-16 mb-32 md:my-32">
        <div className="inline-block bg-green-100 rounded px-4 py-2 mb-8 shadow-inner">
          <div className="flex items-center">
            <div className="h-2 w-2 bg-green-500 rounded-full mr-4" />
            <span className="text-sm md:text-base text-green-500">
              Available for freelance projects.
            </span>
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl">
          Ian Trent &mdash; Software Developer based in Lafayette, Indiana.
        </h1>
        <p className="text-mdgray my-8 md:text-lg max-w-2xl">
          Purdue Boilermaker who's focused on building high-quality, thoughtful,
          and intuitive websites and web applications.
        </p>
        <div>
          <Link className="link md:text-lg" to="/about">
            Learn more about me <span className="arrow">-&gt;</span>
          </Link>
        </div>
      </section>
      <section className="bg-gray-100 mb-32 py-16">
        <div className="contain">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl">Writing</h2>
            <Link className="text-mdgray" to="/blog">
              View All
            </Link>
          </div>
          <ol className="flex flex-col md:flex-row list-none">
            {posts.map((post, index) => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <li key={post.fields.slug}>
                  <Link to={post.fields.slug} itemProp="url">
                    <article
                      className={`post-list-item bg-white p-4 lg:w-1/2 rounded shadow-lg ${
                        !index ? "md:mr-4 mb-6 md:mb-0" : "md:ml-4"
                      }`}
                      itemScope
                      itemType="http://schema.org/Article"
                    >
                      <header>
                        <h2 className="text-xl md:text-2xl">
                          <span itemProp="headline">{title}</span>
                        </h2>
                        <p className="text-mdgray mt-2 mb-4 text-sm">
                          {post.frontmatter.date}
                        </p>
                      </header>
                      <section>
                        <p
                          className="text-mdgray"
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt,
                          }}
                          itemProp="description"
                        />
                      </section>
                      <ul className="flex mt-4">
                        {post.frontmatter.tags.map((tech, i) => (
                          <li
                            key={i}
                            className={`mr-4 text-xs px-2 py-1 rounded-full bg-${post.frontmatter.tagColors[i]}-100 text-${post.frontmatter.tagColors[i]}-800`}
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Link>
                </li>
              )
            })}
          </ol>
        </div>
      </section>
      <section className="contain">
        <h2 className="text-2xl md:text-4xl mb-8">Some Things I've Built</h2>
        <Projects />
      </section>
    </Layout>
  )
}

export default BlogIndex
