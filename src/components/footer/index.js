import React from 'react';

const Footer = () => (
  <footer className="bg-gray-100 py-24 mt-40">
    <div className="contain">
      <div className="flex flex-col sm:flex-row justify-between items-center text-mdgray">
        <p className="mb-2 sm:mb-0">© {new Date().getFullYear()} Ian Trent</p>
        <div>
          <a className="mr-10" href="https://github.com/imtrent" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a className="mr-10" href="https://www.linkedin.com/in/ianmtrent/" target="_blank" rel="noopener noreferrer">
            Linkedin
          </a>
          <a href="https://dev.to/iantrent" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
