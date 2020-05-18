import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Success = () => {
  return (
    <Layout>
      <div className="max-height flex items-center justify-center">
        <div className="contain-sm text-center mt-16">
          <h1 className="text-3xl md:text-4xl md:text-5xl">Thank you!</h1>
          <p className="text-mdgray my-8 md:text-lg">Your message has been successfully sent. I will be in contact with you as soon as possible!</p>
          <Link to="/" className="link md:text-lg">
            Back To Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Success;
