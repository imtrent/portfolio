import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

const AboutPage = () => {
  const query = useStaticQuery(graphql`
    query {
      ian: file(relativePath: { eq: "assets/images/iantrent.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wave: file(relativePath: { eq: "assets/images/wave.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout className="about">
      <SEO
        title="About Me"
        description="I'm a Software Engineer focused on building high-quality, thoughtful, and intuitive web applications."
      />
      <div className="contain-md my-8 md:my-16">
        <Img fluid={query.ian.childImageSharp.fluid} />
      </div>
      <div className="contain-sm">
        <h1 className="flex items-center text-3xl md:text-4xl">
          Hi!
          <span className="w-12 mx-3">
            <Img fluid={query.wave.childImageSharp.fluid} />
          </span>
          I&apos;m Ian Trent.
        </h1>
        <p className="text-mdgray my-8 md:text-lg">
          I'm a Software Engineer focused on building high-quality, thoughtful,
          and intuitive web applications. Currently, I'm pursuing a Bachelor's
          degree in Web Programming and Design, as well as a certificate in
          Entrepreneurship at Purdue University.
        </p>
        <p className="text-mdgray my-8 md:text-lg">
          As a developer at{" "}
          <a
            className="about link"
            href="http://sfp.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            SFP
          </a>
          , I have had the opportunity to work along-side professionals in
          notable projects. I value the ideas of hard-work and persistence.
          These values have aided my career as a developer and have shaped me
          into the person I am today.
        </p>
        <p className="text-mdgray my-8 md:text-lg">
          I like to spend my free time adding on to my web stack and chasing my
          dream of becoming a full-time software engineer. Other than coding, I
          find myself binge-watching that new series on Netflix, petting all the
          dogs I can, or scoping out the best burger joint in town.
        </p>
        <h2 className="text-2xl md:text-3xl mb-4">My Go-To Stack</h2>
        <div className="mr-6 max-w-md">
          <ul className="ml-5 flex flex-wrap md:text-lg text-mdgray list-disc">
            <li className="w-3/6 p-2">React</li>
            <li className="w-3/6 p-2">TypeScript</li>
            <li className="w-3/6 p-2">GraphQL</li>
            <li className="w-3/6 p-2">PostgreSQL</li>
            <li className="w-3/6 p-2">Redis</li>
            <li className="w-3/6 p-2">Tailwind CSS</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
