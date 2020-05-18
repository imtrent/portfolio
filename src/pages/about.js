import React from 'react';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';

const AboutPage = () => {
  const query = useStaticQuery(graphql`
    query {
      ian: file(relativePath: { eq: "iantrent.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      wave: file(relativePath: { eq: "wave.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout className="about">
      <SEO
        title="About Me"
        description="Currently, I am a
                proud boilermaker working toward my bachelor’s degree in Web
                Programming and Design at Purdue University."
      />
      <div className="contain-md my-16">
        <Img fluid={query.ian.childImageSharp.fluid} />
      </div>
      <div className="contain-sm">
        <h1 className="flex items-center text-3xl md:text-4xl md:text-5xl">
          Hi!
          <span className="w-12 mx-3">
            <Img fluid={query.wave.childImageSharp.fluid} />
          </span>
          I&apos;m Ian Trent.
        </h1>
        <p className="text-mdgray my-8 md:text-lg">I’m a Full Stack Developer focused on building compelling websites, and innovative web applications. Currently, I am a proud boilermaker working toward my bachelor’s degree in Web Programming and Design at Purdue University.</p>
        <p className="text-mdgray my-8 md:text-lg">
          As a developer at{' '}
          <a className="link" href="http://sfp.net" target="_blank" rel="noopener noreferrer">
            SFP
          </a>
          , I have had the opportunity to work along-side web development professionals in notable projects. I value the ideas of hard-work and persistence. These values have aided my career as a developer and have shaped me into the person I am today.
        </p>
        <p className="text-mdgray my-8 md:text-lg">I like to spend my free time adding on to my web stack and chasing my dream of becoming a software engineer. Other than coding, I find myself binge-watching that new series on Netflix, petting all the dogs I can, or scoping out the best burger joint in town.</p>
        <div className="max-w-md">
          <h2 className="text-xl md:text-3xl mb-4">My Go-To Stack</h2>
          <ul className="ml-5 flex flex-wrap md:text-lg text-mdgray list-disc">
            <li className="w-3/6 p-2">React</li>
            <li className="w-3/6 p-2">Redux</li>
            <li className="w-3/6 p-2">Node.js</li>
            <li className="w-3/6 p-2">Express.js</li>
            <li className="w-3/6 p-2">PostgreSQL</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
