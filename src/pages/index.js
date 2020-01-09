import React from 'react';
import { Link } from 'gatsby';

import CTA from '../components/callToAction';
import Layout from '../components/layout';

import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO
            title="Full-Stack JavaScript Developer"
            description="Ian Trent &mdash; Full-Stack JavaScript Developer based in Lafayette, Indiana."
        />
        <div className="grid-container">
            <main className="hero">
                <h1>
                    Ian Trent &mdash; Full-Stack Developer based in Lafayette,
                    Indiana.
                </h1>
                <p>
                    Focused on building compelling websites, and innovative web
                    applications.
                </p>
                <Link to="/about" className="link">
                    Learn more about me <span className="arrow">-&gt;</span>
                </Link>
            </main>
            <div className="grid-x grid-margin-x grid-margin-y">
                <div className="cell large-6">
                    <div className="project">
                        <img
                            src={require('./../images/jobsfortechies.png')}
                            alt="Jobs for Techies Preview"
                        />
                        <h2>Jobs For Techies</h2>
                        <p>
                            Find your dream tech job with compaines all around
                            the world.
                        </p>
                        <ul className="tags">
                            <li>React</li>
                            <li>Express</li>
                            <li>Node</li>
                            <li>MongoDB</li>
                            <li>Next.js</li>
                        </ul>
                        <a href="javascript:void(0);" className="link">
                            Coming Soon
                        </a>
                    </div>
                </div>
                <div className="cell large-6">
                    <div className="project">
                        <img
                            src={require('./../images/decore.png')}
                            alt="Decore Preview"
                        />
                        <h2>Decore</h2>
                        <p>
                            Construct a webpage layout that can be used as a
                            bare-bones HTML/CSS starter template.
                        </p>
                        <ul className="tags">
                            <li>React</li>
                            <li>Styled Components</li>
                        </ul>
                        <a
                            href="https://site-builder.netlify.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link"
                        >
                            View Project
                        </a>
                    </div>
                </div>
                <div className="cell large-6">
                    <div className="project">
                        <img
                            src={require('./../images/moviac.png')}
                            alt="Moviac Preview"
                        />
                        <h2>Moviac</h2>
                        <p>
                            React application that allows users to search
                            through hundreds of thousands of movies using TMDb
                            API.
                        </p>
                        <ul className="tags">
                            <li>React</li>
                            <li>SCSS</li>
                            <li>Axios</li>
                        </ul>
                        <a
                            className="link"
                            href="https://moviac.iantrent.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Project
                        </a>
                    </div>
                </div>
                <div className="cell">
                    <CTA />
                </div>
            </div>
        </div>
    </Layout>
);

export default IndexPage;
