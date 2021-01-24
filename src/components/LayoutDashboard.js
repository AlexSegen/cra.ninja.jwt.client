import React from 'react';
import Header from './dashboard/Header';
import Sidebar from './dashboard/Sidebar';


import '../assets/dashboard/scss/argon.scss';
import '../assets/vendor/nucleo/css/nucleo.css';

const LayoutDashboard = ({children, location}) => {
    return ( 
        <>
            <Sidebar/>
            <div class="main-content" id="panel">
                
                <Header/>

                {children}

            </div>
        </>
     );
}
 
export default LayoutDashboard;