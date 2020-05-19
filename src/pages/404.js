import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not Found" description="It looks like the webpage you’re trying to reach does not exist." />
    <div className="max-height flex items-center justify-center">
      <div className="contain-sm text-center mt-8">
        <h1 className="text-3xl md:text-4xl md:text-5xl">404</h1>
        <p className="text-mdgray my-8 md:text-lg">Oh no! It looks like the webpage you’re trying to reach does not exist.</p>
        <Link to="/" className="link md:text-lg">
          Back To Homepage
        </Link>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
