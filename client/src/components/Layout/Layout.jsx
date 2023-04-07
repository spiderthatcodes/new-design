import React from 'react';
import Nav from '../Nav/Nav';
import { Container, Content } from './style';

const Layout = ({ children, isMobile }) => (
    <Container>
        <Nav />
        <Content isMobile={isMobile}>{children}</Content>
    </Container>
);

export default Layout;
