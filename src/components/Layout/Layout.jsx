import React from 'react';
import Nav from '../Nav/Nav';
import { Container, Content } from './style';
import Footer from '../Footer/Footer';

const Layout = ({ children, isMobile }) => {
    return (
    <Container>
        <Nav isMobile={isMobile} />
        <Content isMobile={isMobile}>{children}</Content>
        <Footer isMobile={isMobile} />
    </Container>
)};

export default Layout;
