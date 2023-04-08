import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Container } from './style';

const Home = ({ isMobile }) => {
    const introduction = "Hello, I'm Jessica.";

    return (
        <Layout isMobile={isMobile}>
            <Container>
                <h1>{introduction.split('').map((char, index) => <span key={index}>{char}</span> )}</h1>
                
            </Container>
        </Layout>
    );
};

export default Home;
