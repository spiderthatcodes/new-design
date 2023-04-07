import styled from 'styled-components'
import { colors } from '../../resources/theme';

export const Container = styled.div`
    width: 100%;
    background-color: ${colors.black};
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    font-family: 'Source Sans Pro', sans-serif;
`;

export const Content = styled.div`
    max-width:  ${props => props.isMobile ? 'auto' : '1240px'};
    padding: ${props => props.isMobile ? '10px' : '20px 80px'};
    margin: ${props => props.isMobile ? 0 :  'auto'};
`;
