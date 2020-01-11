import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
    <Layout className="not-found">
        <SEO title="404 Not found" />
        <div className="grid-container text-center">
            <h1>404</h1>
            <p>
                Oh no! It looks like the webpage you’re trying to reach does not
                exist.
            </p>
            <Link to="/" exact className="link">
                Back To Home
            </Link>
        </div>
    </Layout>
);

export default NotFoundPage;
