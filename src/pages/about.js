import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => (
    <Layout className="about">
        <SEO
            title="About Me"
            description="Currently, I am a
                proud boilermaker working toward my bachelor’s degree in Web
                Programming and Design at Purdue University."
        />
        <div className="grid-container medium">
            <img
                className="portrait"
                src={require('./../images/iantrent.png')}
                alt="Portrait of Ian Trent"
                width="100%"
            />
        </div>
        <div className="grid-container small">
            <h1>
                Hi!
                <img
                    className="wave"
                    src={require('./../images/wave.png')}
                    alt=""
                />
                I&apos;m Ian Trent.
            </h1>
            <p>
                I’m a Full Stack Developer focused on building compelling
                websites, and innovative web applications. Currently, I am a
                proud boilermaker working toward my bachelor’s degree in Web
                Programming and Design at Purdue University.
            </p>
            <p>
                As a developer at{' '}
                <a
                    className="link"
                    href="http://sfp.net"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    SFP
                </a>
                , I have had the opportunity to work along-side web development
                professionals in notable projects. I value the ideas of
                hard-work and persistence. These values have aided my career as
                a developer and have shaped me into the person I am today.
            </p>
            <p>
                I like to spend my free time adding on to my web stack and
                chasing my dream of becoming a software engineer. Other than
                coding, I find myself binge-watching that new series on Netflix,
                petting all the dogs I can, or scoping out the best burger joint
                in town.
            </p>
        </div>
        <div className="grid-container small">
            <h2>My Go-To Stack</h2>
            <ul className="stack">
                <li>React</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
            </ul>
        </div>
    </Layout>
);

export default AboutPage;
