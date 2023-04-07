import React from 'react';
import Layout from '../../components/Layout/Layout';

const Home = ({ isMobile }) => {
    return (
        <Layout isMobile={isMobile}>
            <h1>One</h1>
            <h2>Two</h2>
            <h3>Three</h3>
        </Layout>
    );
};

export default Home;
