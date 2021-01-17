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
    }
  `)

  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Software Engineer"
        description="Ian Trent &mdash; Software Engineer based in Lafayette, Indiana."
      />
      <section className="contain mt-16 mb-32 md:my-32">
        <div className="inline-block bg-green-100 rounded px-4 py-2 mb-8 shadow-inner">
          <div className="flex items-center">
            <div className="h-2 w-2 bg-green-500 rounded-full mr-4" />
            <span className="text-sm md:text-base text-green-500">
              Seeking a full-time role for after graduation
            </span>
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl">
          Ian Trent &mdash; Software Engineer based in Lafayette, Indiana.
        </h1>
        <p className="text-mdgray my-8 md:text-lg">
          Purdue Boilermaker who's focused on building high-quality, thoughtful,
          and intuitive web applications.
        </p>
        <div>
          <Link className="link md:text-lg" to="/about">
            Learn more about me <span className="arrow">-&gt;</span>
          </Link>
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
