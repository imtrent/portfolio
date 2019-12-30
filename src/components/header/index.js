import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import {
    HeaderWrapper,
    Navbar,
    Logo,
    Menu,
    Navigation,
    Socials
} from './styles';
import Hamburger from './hamburger';
import { Container } from '../grid/styles';

// Component
const Header = () => {
    const [menu, toggleMenu] = useState(false);
    const [useClass, setClass] = useState('');
    const [scrolling, setScrolling] = useState(false);

    const toggleMobileMenu = () => {
        if (menu) {
            setClass('hidden');
        } else {
            setClass('active');
        }
        toggleMenu(!menu);
    };

    useEffect(() => {
        const body = document.querySelector('body');
        if (menu) {
            body.style.overflow = 'hidden';
        } else {
            setTimeout(() => {
                body.style.overflow = '';
            }, 400);
        }

        window.onscroll = function changeClass() {
            const scrollPosY = window.pageYOffset || document.body.scrollTop;

            if (scrollPosY > 30) {
                setScrolling(true);
            } else if (scrollPosY <= 30) {
                setScrolling(false);
            }
        };
    });

    return (
        <HeaderWrapper className={scrolling ? 'stuck' : null}>
            <Container className="large">
                <Navbar>
                    <Logo
                        active={menu}
                        onClick={menu ? toggleMobileMenu : null}
                    >
                        <Link to="/">Ian Trent</Link>
                    </Logo>
                    <Hamburger
                        isToggled={menu}
                        toggleMobileMenu={toggleMobileMenu}
                    />
                    <Navigation className={useClass}>
                        <Menu>
                            <Link
                                to="/"
                                exact
                                activeClassName="active"
                                className="nav-link"
                                onClick={menu ? toggleMobileMenu : null}
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                activeClassName="active"
                                className="nav-link"
                                onClick={menu ? toggleMobileMenu : null}
                            >
                                About
                            </Link>
                            <Link
                                to="/contact"
                                activeClassName="active"
                                className="nav-link"
                                onClick={menu ? toggleMobileMenu : null}
                            >
                                Contact
                            </Link>
                            <a
                                href="/files/Ian_Trent_Resume.pdf?download=n"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resume
                            </a>
                        </Menu>
                    </Navigation>
                </Navbar>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;
