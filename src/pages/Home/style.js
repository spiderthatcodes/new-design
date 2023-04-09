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

    .mobileIntro, .mobileIntro2 {
        color: ${colors.peach};
        font-size: 46px;
        padding: 12px 38px;
        line-height: 24px;
        z-index: 1;
        margin: 30px 0;
    }

    .mobileCert {
        color: ${colors.tan};
        font-size: 32px;
        padding: 12px 38px;
        line-height: 24px;
        text-align: center;
        margin: 0;
    }

    .mobileIntro2 {
        padding: 16px 56px;
    }

    #lineOne {
        margin-bottom: 10vh;
    }

`;

export const ButtonBox = styled.div`
    
    display: flex;
    justify-content: flex-end;
`;

export const Button = styled.button`
    background-color: ${colors.black};
    color: ${colors.peach};
    font-size: 32px;
    width: 250px;
    border: none;
    padding: 16px 24px;
    cursor: pointer;
`;
