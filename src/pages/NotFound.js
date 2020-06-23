import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/page-header';

const NotFound = () => {
    
    return ( 
        <Layout>
            <PageHeader title="404"/>
            <div className="container py-5 text-center">
                <p>Not found.</p>
            </div>
        </Layout>
     );
}
 
export default NotFound;