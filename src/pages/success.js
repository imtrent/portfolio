import React, { useState } from 'react';
import Layout from '../components/layout';

const Success = () => {
    return (
        <Layout>
            <div className="grid-container text-center">
                <h1>Thank you!</h1>
                <p>
                    Your message has been successfully sent. I will be in
                    contact with you as soon as possible!
                </p>
            </div>
        </Layout>
    );
};

export default Success;
