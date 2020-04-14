import React from 'react';
import { Link } from 'gatsby';

import CTA from '../components/callToAction';
import Layout from '../components/layout';

import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO
            title="Full-Stack Developer"
            description="Ian Trent &mdash; Full-Stack Developer based in Lafayette, Indiana."
        />
        <div className="grid-container">
            <main className="hero">
                <h1>
                    Ian Trent &mdash; Full-Stack Developer based in Lafayette,
                    Indiana.
                </h1>
                <p>
                    Focused on building compelling websites, and engineering
                    innovative web applications.
                </p>
                <Link to="/about" className="link">
                    Learn more about me <span className="arrow">-&gt;</span>
                </Link>
            </main>
            <div className="grid-x grid-margin-x grid-margin-y">
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
                <div className="cell large-6">
                    <div className="project">
                        <img
                            src={require('./../images/whirleypopshop.jpg')}
                            alt="Whirley Pop Preview"
                        />
                        <h2>Whirley Pop Shop</h2>
                        <p>
                            eCommerce site that sells everything and anything popcorn. Built during my internship at <a className="link no-line" href="https://sfp.net" target="_blank">SFP.</a>
                        </p>
                        <ul className="tags">
                            <li>Laravel</li>
                            <li>PHP</li>
                            <li>Vue</li>
                            <li>SCSS</li>
                        </ul>
                        <a
                            href="https://whirleypopshop.com"
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
                            src={require('./../images/safeandvault.jpg')}
                            alt="Safe & Vault Preview"
                        />
                        <h2>Safe & Vault</h2>
                        <p>
                            eCommerce site that sells security systems and equipment. Built during my internship at <a className="link no-line" href="https://sfp.net" target="_blank">SFP.</a>
                        </p>
                        <ul className="tags">
                            <li>Laravel</li>
                            <li>PHP</li>
                            <li>SCSS</li>
                        </ul>
                        <a
                            href="https://safeandvault.com"
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
                            <li>Redux</li>
                            <li>Styled Components</li>
                        </ul>
                        <a
                            href="https://de-core.netlify.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link"
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
