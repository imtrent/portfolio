import React from 'react';
import { Link } from 'gatsby';

import Hero from '../components/hero/styles';
import { ProjectWrapper, ProjectPreview } from '../components/project/styles';
import { Container, Row, Column } from '../components/grid/styles';
import {
    Title,
    Subtitle,
    Description,
    Direct,
} from '../components/settings/styles';
import CTA from '../components/callToAction';
import Layout from '../components/layout';

import Tags from './../components/tags';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO
            title="Full-Stack JavaScript Developer"
            description="Ian Trent &mdash; Full-Stack JavaScript Developer based in Lafayette, Indiana."
        />
        <Container className="large">
            <Hero>
                <Title margin="0 0 2rem 0">
                    Ian Trent &mdash; Full-Stack JavaScript Developer based in
                    Lafayette, Indiana.
                </Title>
                <Description
                    fontBreakOne="2rem"
                    fontSize="2rem"
                    margin="0rem 0 5rem"
                >
                    Focused on building innovative web applictions.
                </Description>
                <Link to="/about">
                    <Direct fontBreakOne="1.8rem" fontSize="1.8rem">
                        Learn more about me <span className="arrow">-&gt;</span>
                    </Direct>
                </Link>
            </Hero>
            <ProjectWrapper>
                <Row>
                    <Column className="flex-6">
                        <ProjectPreview>
                            <img src={require("./../images/decore.png")} alt="Decore Preview" />
                            <Subtitle margin="0 0 1rem 0">Decore</Subtitle>
                            <Description fontSize="1.8rem" margin="0 0 1rem">
                                Construct a webpage layout that can be used as a
                                bare-bones HTML/CSS starter template.
                            </Description>
                            <Tags>
                                <li>React</li>
                                <li>Styled Components</li>
                            </Tags>
                            <a
                                href="https://site-builder.netlify.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Direct fontBreakOne="1.6rem" fontSize="1.8rem">
                                    View Project
                                </Direct>
                            </a>
                        </ProjectPreview>
                    </Column>
                    <Column className="flex-6">
                        <ProjectPreview>
                            <div>
                                <img src={require("./../images/moviac.png")} alt="Moviac Preview" />
                            </div>
                            <Subtitle margin="0 0 1rem 0">Moviac</Subtitle>
                            <Description
                                fontBreakOne="2rem"
                                fontSize="1.8rem"
                                margin="0 0 1rem"
                            >
                                React application that allows users to search
                                through hundreds of thousands of movies using
                                TMDb API.
                            </Description>
                            <Tags>
                                <li>React</li>
                                <li>SCSS</li>
                                <li>Axios</li>
                            </Tags>
                            <a
                                href="https://moviac.iantrent.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Direct fontBreakOne="1.6rem" fontSize="1.8rem">
                                    View Project
                                </Direct>
                            </a>
                        </ProjectPreview>
                    </Column>
                    <Column className="flex-6">
                        <ProjectPreview>
                            <img src={require("./../images/jobsfortechies.png")} alt="Jobs for Techies Preview" />
                            <Subtitle margin="0 0 1rem 0">
                                Jobs For Techies
                            </Subtitle>
                            <Description fontSize="1.8rem" margin="0 0 1rem">
                                Find jobs in tech with companies all around the
                                world.
                            </Description>
                            <Tags>
                                <li>React</li>
                                <li>Express</li>
                                <li>Node</li>
                                <li>PostgreSQL</li>
                                <li>Next.js</li>
                            </Tags>
                            <a href="javascript:void(0);">
                                <Direct fontBreakOne="1.6rem" fontSize="1.8rem">
                                    Coming Soon
                                </Direct>
                            </a>
                        </ProjectPreview>
                    </Column>
                </Row>
            </ProjectWrapper>
            <CTA />
        </Container>
    </Layout>
);

export default IndexPage;
