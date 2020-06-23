import React from 'react';
import Header from './shared/header';
import Footer from './shared/footer';

import '../assets/css/nucleo-icons.css'
import '../assets/scss/argon-design-system.scss'

const Layout = ({children, location}) => {
    return ( 
        <>
        <Header/>
            <main className="wrapper">
                {children}
            </main>
        <Footer/>
        </>
     );
}
 
export default Layout;