import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Container } from './style';

const Home = ({ isMobile }) => {
    const introduction = "Hello, I'm Jessica.";

    console.log(introduction.split(''))

    return (
        <Layout isMobile={isMobile}>
            <Container>
                <h1>{introduction.split('').map((char, index) => <span key={index}>{char}</span> )}</h1>
                {/* <p>I am a full stack developer & certified scrum master.</p> */}
            </Container>
        </Layout>
    );
};

export default Home;
