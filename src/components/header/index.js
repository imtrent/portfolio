import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { globalHistory as history } from '@reach/router';

const Header = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [useClass, setUseClass] = useState('');
  const { location } = history;
  const [scrolling, setScrolling] = useState(false);

  const toggleMobileMenu = () => {
    if (isActive) {
      setUseClass('hidden');
    } else {
      setUseClass('active');
    }
    setIsActive(!isActive);
  };

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
    <header className={`sticky top-0 z-50 bg-white py-6 ${scrolling ? 'border-b border-border mt-0' : 'mt-4'}`}>
      <div className="contain flex items-center justify-between">
        <Link className={`font-heading text-xl tracking-wider z-50 transition-colors duration-300 ${isActive ? 'text-white' : 'text-primary'}`} to="/" onClick={isActive ? toggleMobileMenu : null}>
          Ian Trent
        </Link>
        <div role="button" tabIndex={0} className={`hamburger relative block z-50 pointer focus:outline-none ${isActive ? 'active' : ''}`} onClick={toggleMobileMenu} onKeyDown={(evt) => evt.keyCode === 13 && setIsActive(!isActive)}>
          <div className="bg-primary"></div>
          <div className="bg-primary"></div>
          <div className="bg-primary"></div>
        </div>
        <nav className={useClass}>
          <div className="menu mt-32 contain flex flex-col font-heading text-3xl tracking-wider items-end">
            <Link to="/" className={`mb-8 hover:text-white ${location.pathname === '/' ? 'text-white active' : 'text-offgray'}`} onClick={isActive ? toggleMobileMenu : null}>
              Home
            </Link>
            <Link to="/about" className={`mb-8 hover:text-white ${location.pathname === '/about' ? 'text-white active' : 'text-offgray'}`} onClick={isActive ? toggleMobileMenu : null}>
              About
            </Link>
            <Link to="/contact" className={`mb-8 hover:text-white ${location.pathname === '/contact' ? 'text-white active' : 'text-offgray'}`} onClick={isActive ? toggleMobileMenu : null}>
              Contact
            </Link>
            <a className="mb-8 text-offgray hover:text-white" href={'/pdfs/Ian_Trent_Resume_2020.pdf'} target="_blank" rel="noopener noreferrer" onClick={isActive ? toggleMobileMenu : null}>
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
