import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

const Header = ({ siteTitle }) => {
  const [isActive, setIsActive] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  function changeClass() {
    const scrollPosY = window.pageYOffset || document.body.scrollTop;

    if (scrollPosY > 30) {
      setScrolling(true);
    } else if (scrollPosY <= 30) {
      setScrolling(false);
    }
  }

  useEffect(() => {
    changeClass();

    const body = document.querySelector('body');
    if (isActive) {
      body.style.overflow = 'hidden';
    } else {
      setTimeout(() => {
        body.style.overflow = '';
      }, 400);
    }

    window.onscroll = changeClass;
  });

  return (
    <header className={`sticky top-0 bg-white py-6 ${scrolling ? 'border-b border-border' : null}`}>
      <div className="contain flex items-center justify-between">
        <Link className={`font-heading text-xl tracking-wider z-50 transition-colors duration-300 ${isActive ? 'text-white' : 'text-primary'}`} to="/">
          Ian Trent
        </Link>
        <div role="button" className={`hamburger relative block z-50 pointer ${isActive ? 'active' : ''}`} onClick={() => setIsActive(!isActive)}>
          <div className="bg-primary"></div>
          <div className="bg-primary"></div>
          <div className="bg-primary"></div>
        </div>
        <nav className={`${isActive ? 'active' : 'hidden'} bg-primary`}>
          <div className="menu mt-32 contain flex flex-col font-heading text-3xl tracking-wider items-end">
            <Link to="/" className={`mb-8 hover:text-white ${window.location.pathname === '/' ? 'text-white active' : 'text-mdgray'}`}>
              Home
            </Link>
            <Link to="/about" className={`mb-8 hover:text-white ${window.location.pathname === '/about' ? 'text-white active' : 'text-mdgray'}`}>
              About
            </Link>
            <Link to="/contact" className={`mb-8 hover:text-white ${window.location.pathname === '/contact' ? 'text-white active' : 'text-mdgray'}`}>
              Contact
            </Link>
            <a className="mb-8 text-mdgray hover:text-white" href={'/pdfs/Ian_Trent_Resume_2020.pdf'} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
