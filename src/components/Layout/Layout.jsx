import React from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { Container, Content } from './style';


const Layout = ({ children, isMobile, setVisibleSkills }) => {
    return (
    <Container>
        <Nav isMobile={isMobile} setVisibleSkills={setVisibleSkills} />
        <Content isMobile={isMobile}>{children}</Content>
        <Footer isMobile={isMobile} />
    </Container>
)};

export default Layout;
