import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/hero';
import TopFeatures from '../components/top-features';
import BottomFeatures from '../components/bottom-features';

const Home = () => {

    return ( 
        <Layout location="home">
            <Hero/>
            <TopFeatures/>
            <BottomFeatures/>
        </Layout>
     );
}
 
export default Home;