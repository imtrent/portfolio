import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

const Header = ({ siteTitle }) => {
  const [isActive, setIsActive] = useState(false);
  const [path, setPath] = useState('');
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
    setPath(window.location.pathname);

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
    <header className={`sticky top-0 z-50 bg-white py-6 ${scrolling ? 'border-b border-border mt-0' : 'mt-4'}`}>
      <div className="contain flex items-center justify-between">
        <Link className={`font-heading text-xl tracking-wider z-50 transition-colors duration-300 ${isActive ? 'text-white' : 'text-primary'}`} to="/">
          Ian Trent
        </Link>
        <div role="button" tabIndex={0} className={`hamburger relative block z-50 pointer focus:outline-none ${isActive ? 'active' : ''}`} onClick={() => setIsActive(!isActive)} onKeyDown={(evt) => evt.keyCode === 13 && setIsActive(!isActive)}>
          <div className="bg-primary"></div>
          <div className="bg-primary"></div>
          <div className="bg-primary"></div>
        </div>
        <nav className={`${isActive ? 'active' : 'hidden'} bg-primary`}>
          <div className="menu mt-32 contain flex flex-col font-heading text-3xl tracking-wider items-end">
            <Link to="/" className={`mb-8 hover:text-white ${path === '/' ? 'text-white active' : 'text-offgray'}`}>
              Home
            </Link>
            <Link to="/about" className={`mb-8 hover:text-white ${path === '/about' ? 'text-white active' : 'text-offgray'}`}>
              About
            </Link>
            <Link to="/contact" className={`mb-8 hover:text-white ${path === '/contact' ? 'text-white active' : 'text-offgray'}`}>
              Contact
            </Link>
            <a className="mb-8 text-offgray hover:text-white" href={'/pdfs/Ian_Trent_Resume_2020.pdf'} target="_blank" rel="noopener noreferrer">
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
