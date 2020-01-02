import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/grid/styles';
import { Title, Subtitle, Description } from '../components/settings/styles';
import Layout from '../components/layout';
import SEO from "../components/seo";


const AboutContent = styled.div`
    .portrait {
        margin: 50px 0;
    }

    span.background {
        padding: 3px 5px;
        border-radius: 3px;
        background-color: #e9fdeb;
        color: #2ccb3c;
    }

    .last-desc {
        margin-bottom: 10rem;
    }
`;

const Logos = styled.div`
    @media only screen and (max-width: 545px) {
        flex-direction: column;
    }
    display: flex;
    align-items: center;
    margin: 3rem 0 20rem;

    img {
        @media only screen and (min-width: 545px) {
            margin: 0 2.5rem 0 0;
        }
        margin: 0 0 2.5rem 0;
        width: auto;
        height: 55px;

        &:first-child {
            height: 40px;
        }

        &:nth-child(2) {
            height: 35px;
        }

        &:last-of-type {
            margin-right: 0;
        }
    }

`;

const AboutPage = () => (
    <Layout>
        <SEO title="About Me" />
        <AboutContent>
            <Container className="medium">
                <img
                    className="portrait"
                    src={require("./../images/iantrent.png")}
                    alt="Portrait of Ian Trent"
                    width="100%"
                />
            </Container>
            <Container className="small">
                <Title>
                    Hi!{' '}
                    <span role="img" aria-label="Waiving hand">
                        👋
                    </span>{' '}
                    I&apos;m Ian Trent.
                </Title>
                <Description
                    fontBreakOne="2rem"
                    fontSize="1.8rem"
                    margin="0 0 3rem"
                >
                    Currently, I am a junior at Purdue University in West Lafayette,
                    Indiana, working towards a bachelors degree in Web Programming
                    and Design. Throughout my college experience I have not only
                    grown my passion for web development, but have also found a love
                    for learning.
                </Description>
                <Description
                    fontBreakOne="2rem"
                    fontSize="1.8rem"
                    margin="0 0 3rem"
                >
                    When I’m not in class, I work as a front-end developer at
                    <span>
                        <a
                            href="http://sfp.net"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {' '}SFP
                        </a>
                    </span>
                    , where I build custom websites from scratch for
                    clients, big and small.
                </Description>
                <Description fontSize="1.8rem" className="last-desc">
                    I like to spend my free time adding on to my web stack and
                    chasing my dreams of becomming a full-stack JavaScript
                    developer. Other than coding, I find myself playing a round of
                    golf, petting all the dogs I can, watching the newest series on
                    Netflix, or just enjoying life with my girlfriend, Annie.
                </Description>
            </Container>
            <Container className="small">
                <Subtitle>
                    My Go-To Stack
                </Subtitle>
                <Logos>
                    <img src={require("./../images/logos/mongo.png")} alt="MongoDB logo" title="MongoDB" />
                    <img src={require("./../images/logos/express.png")} alt="Express.js logo" title="Express.js" />
                    <img src={require("./../images/logos/react.png")} alt="React.js logo" title="React.js" />
                    <img src={require("./../images/logos/nodejs.png")} alt="Node.js logo" title="Node.js" />
                    <img src={require("./../images/logos/sass.png")} alt="SASS logo" title="SCSS" />
                </Logos>
            </Container>
        </AboutContent>
    </Layout>
);

export default AboutPage;
