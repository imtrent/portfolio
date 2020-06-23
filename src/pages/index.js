import React from 'react';
import { Link } from 'gatsby';

import Layout from './../components/layout';
import Projects from './../components/projects';

import SEO from './../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Full Stack Developer" description="Ian Trent &mdash; Full Stack Developer based in Lafayette, Indiana." />
    <section className="contain my-32 md:mb-48 mt-32">
      <div className="inline-block bg-green-100 rounded px-4 py-2 mb-8 shadow-inner">
        <div className="flex items-center">
          {' '}
          <div className="h-2 w-2 bg-green-500 rounded-full mr-4" />
          <span className="text-sm md:text-base text-green-500">Available for freelance projects.</span>
        </div>
      </div>
      <h1 className="text-3xl md:text-5xl">Ian Trent &mdash; Full Stack Developer based in Lafayette, Indiana.</h1>
      <p className="text-mdgray my-8 md:text-lg max-w-2xl">Purdue Boilermaker who's focused on building high-quality, thoughtful, and intuitive websites and web applications.</p>
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
);

export default IndexPage;
