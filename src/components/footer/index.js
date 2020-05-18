import React from 'react';

const Footer = () => (
  <footer className="bg-gray-100 py-24 mt-40">
    <div className="contain">
      <div className="flex justify-between items-center text-mdgray">
        <p>© 2020 Ian Trent</p>
        <div>
          <a className="mr-10" href="https://github.com/imtrent" target="_blank" rel="noopener noreferrer">
            Github
          </a>
          <a href="https://www.linkedin.com/in/ianmtrent/" target="_blank" rel="noopener noreferrer">
            Linkedin
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
