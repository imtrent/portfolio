import React from 'react';
import Header from './header/index';
import Footer from './footer/index';
import './../styles/app.scss';

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
            <div className={`wrapper ${className}`}>{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
