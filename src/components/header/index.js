import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Hamburger from './hamburger';

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
        <header className={scrolling ? 'stuck' : null}>
            <div className="grid-container large">
                <div className="navbar">
                    <div
                        className={'logo ' + (menu ? 'active' : null)}
                        onClick={menu ? toggleMobileMenu : null}
                    >
                        <Link to="/">Ian Trent</Link>
                    </div>
                    <Hamburger
                        isToggled={menu}
                        toggleMobileMenu={toggleMobileMenu}
                    />
                    <nav className={useClass}>
                        <div className="menu">
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
                                href={'/pdfs/Ian_Trent_Resume_2020.pdf'}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resume
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
