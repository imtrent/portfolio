import React from 'react';
import Header from './header/index';
import Footer from './footer/index';

const Layout = ({ children, className }) => {
  // const data = useStaticQuery(graphql`
  //     query SiteTitleQuery {
  //         site {
  //             siteMetadata {
  //                 title
  //             }
  //         }
  //     }
  // `)

  return (
    <div className="layout">
      <Header />
      <main className={`wrapper ${className}`}>{children}</main>
      {/*<Footer /> */}
    </div>
  );
};

export default Layout;
