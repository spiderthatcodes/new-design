import styled from 'styled-components'
import { colors } from '../../resources/theme';

export const Container = styled.div`
    max-width: 1240px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        color: ${colors.white};
    }
`;

export const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
`;

export const Links = styled.div`
    display: flex;


    img {
        width: 34px;
        height: auto;
        padding: 0 8px;
    }
`;