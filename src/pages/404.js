import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <h1>404</h1>
        <p>
            Oh no! It looks like the webpage you’re trying to reach does not
            exist.
        </p>
        <Link to="/" exact>
            Back To Home
        </Link>
    </Layout>
);

export default NotFoundPage;
