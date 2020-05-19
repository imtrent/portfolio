import React from 'react';
import Header from './header/index';
import Footer from './footer/index';

const Layout = ({ children, className }) => {
  return (
    <div className="relative">
      <Header />
      <main className={`wrapper ${className}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
