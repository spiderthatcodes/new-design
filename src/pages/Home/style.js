import styled from 'styled-components';
import { colors } from '../../resources/theme';

export const Container = styled.div`
    position: relative;
    height: 55vh;
    #intro {
        color: ${colors.peach};
        font-size: 100px;
        padding: 6px 38px;
        line-height: 24px;
        z-index: 1;
        margin: 30px 0;
    }

    span:hover {
        color: ${colors.white};
        font-size: 88px;
        text-shadow: 0px 0px 12px ${colors.white};
    }

    .skill {
        color: ${colors.black};
    }

    .skill:hover {
        color: ${colors.white};
        text-shadow: 0px 0px 12px ${colors.white};
    }
`;

export const ButtonBox = styled.div`
    
    display: flex;
    justify-content: flex-end;
`;

export const Button = styled.button`
    background-color: ${colors.black};
    color: ${colors.tan};
    font-size: 32px;
    width: 250px;
    border: none;
    padding: 24px;
    cursor: pointer;
`;
