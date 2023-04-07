import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background-color: #1e1e1e;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
`;

export const Content = styled.div`
    max-width:  ${props => props.isMobile ? 'auto' : '1240px'};
    padding: ${props => props.isMobile ? '10px' : '20px 80px'};
    margin: ${props => props.isMobile ? 0 :  'auto'};
`;

// fbfaf9

// bbb4ab

// dec2ba - peach