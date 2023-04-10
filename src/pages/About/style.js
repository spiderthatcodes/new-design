import styled from 'styled-components';
import { colors } from '../../resources/theme';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
    margin-bottom: ${(props) => (props.isMobile && '46px')};
    /* height: ${(props) => (props.isMobile ? 'auto' : '50vh')}; */
`;

export const Paragraph = styled.p`
    color: ${colors.white};
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.69);
    font-size: 24px;
    line-height: 40px;
    margin: ${(props) => (props.isMobile ? '6px' : '25px')};
    padding: ${(props) => (props.isMobile ? '8px' : '36px')};
    width: ${(props) => (props.isMobile ? 'auto' : '35vw')};
    /* box-shadow: 1px 1px 2px rgba(2, 128, 144, 0.49); */

    a {
        color: ${colors.accent};
        text-decoration: none;
    }
`;
