import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/grid/styles';
import { Title, Description } from '../components/settings/styles';
import Layout from '../components/layout';
import SEO from "../components/seo";
import Ian from './../images/ian-trent.png';

const AboutContent = styled.div`
    img {
        margin: 50px 0;
    }

    span.background {
        padding: 3px 5px;
        border-radius: 3px;
        background-color: #e9fdeb;
        color: #2ccb3c;
    }
`;

const AboutPage = () => (
    <Layout>
        <SEO title="About Me" />
        <AboutContent>
            <Container className="medium">
                <img
                    src={Ian}
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
                            SFP
                        </a>
                    </span>
                    , where I assist in building custom websites from scratch for
                    clients, big and small.
                </Description>
                <Description fontSize="1.8rem" margin="0 0 10rem">
                    I like to spend my free time adding on to my web stack and
                    chasing my dreams of becomming a full-stack JavaScript
                    developer. Other than coding, I find myself playing a round of
                    golf, petting all the dogs I can, watching the newest series on
                    Netflix, or just enjoying life with my girlfriend, Annie.
                </Description>
            </Container>
        </AboutContent>
    </Layout>
);

export default AboutPage;
