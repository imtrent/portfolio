import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Success = () => {
    return (
        <Layout className="success">
            <div className="grid-container text-center">
                <h1>Thank you!</h1>
                <p>
                    Your message has been successfully sent. I will be in
                    contact with you as soon as possible!
                </p>
                <Link to="/" className="link">
                    Back To Homepage
                </Link>
            </div>
        </Layout>
    );
};

export default Success;
