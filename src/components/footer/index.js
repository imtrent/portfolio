import React from 'react';
import { Container } from '../grid/styles';
import {
    SocialWrapper,
    Copyright,
    FooterWrapper,
    FooterContent,
    Social
} from './styles';

const Footer = () => (
    <FooterWrapper>
        <Container className="large">
            <FooterContent>
                <Copyright>© 2019 Ian Trent</Copyright>
                <SocialWrapper>
                    <Social
                        href="https://twitter.com/ianmtrent"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Twitter
                    </Social>
                    <Social
                        href="https://github.com/imtrent"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </Social>
                    <Social
                        href="https://www.linkedin.com/in/ianmtrent/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Linkedin
                    </Social>
                </SocialWrapper>
            </FooterContent>
        </Container>
    </FooterWrapper>
);

export default Footer;
