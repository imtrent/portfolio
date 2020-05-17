import React from 'react';
import { Link } from 'gatsby';

import Layout from './../components/layout';
import Projects from './../components/projects';

import SEO from './../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Full Stack Developer" description="Ian Trent &mdash; Full Stack Developer based in Lafayette, Indiana." />
    <section className="contain my-32 md:my-48">
      <h1 className="text-3xl md:text-4xl md:text-5xl">Ian Trent &mdash; Full Stack Developer based in Lafayette, Indiana.</h1>
      <p className="text-mdgray my-8 md:text-lg">Focused on building compelling websites, and engineering innovative web applications.</p>
      <Link className="text-ltgray lg:text-lg" to="/about">
        Learn more about me
      </Link>
    </section>
    <section className="contain">
      <h2 className="text-2xl md:text-4xl mb-8">Some Things I've Built</h2>
      <Projects />
    </section>
  </Layout>
);

export default IndexPage;
