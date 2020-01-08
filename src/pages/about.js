import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => (
    <Layout className="about">
        <SEO title="About Me" />
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
                Currently, I am a junior at Purdue University in West Lafayette,
                Indiana, working towards a bachelors degree in Web Programming
                and Design. Throughout my college experience I have not only
                grown my passion for web development, but have also found a love
                for learning.
            </p>
            <p>
                When I’m not in class, I work as a front-end developer at
                <span>
                    <a
                        href="http://sfp.net"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {' '}
                        SFP
                    </a>
                </span>
                , where I build custom websites from scratch for clients, big
                and small.
            </p>
            <p>
                I like to spend my free time adding on to my web stack and
                chasing my dreams of becomming a full-stack JavaScript
                developer. Other than coding, I find myself playing a round of
                golf, petting all the dogs I can, watching the newest series on
                Netflix, or just enjoying life with my girlfriend, Annie.
            </p>
        </div>
        <div className="grid-container small">
            <h2>My Go-To Stack</h2>
            <ul class="stack">
                <li>React</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
            </ul>
        </div>
    </Layout>
);

export default AboutPage;
