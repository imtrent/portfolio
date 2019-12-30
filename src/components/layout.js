import React from 'react';
import { GlobalStyles } from './settings/styles';
import Header from './header/index';
import Footer from './footer/index';

const Layout = ({ children }) => {
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
        <div>
            <GlobalStyles />
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
