import styled from 'styled-components';
import { colors } from '../../resources/theme';

export const Container = styled.div`
    max-width: 1240px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .mobile {
        margin: 0;
        max-width: auto;
        display: block;
    }

    a {
        color: ${colors.black};
        text-shadow: 2px 2px 7px ${colors.white};
        font-size: 24px;
        padding: 12px 16px;
        text-decoration: none;
    }
`;

export const Logo = styled.img`
    width: 250px;
    height: auto;
`;

export const Dropdown = styled.div`
    position: relative;
    display: inline-block;

    .open {
        display: block;
    }
`;

export const DropdownContent = styled.div`
    display: none;
    position: absolute;
    right: 0;
    background-color: ${colors.white};
    min-width: 100px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    .open {
        display: block;
    }

    a {
        color: black;
        padding: 12px 16px;
        text-align: center;
        text-decoration: none;
        display: block;
    }
`;

export const DropButton = styled.button`
    background-color: ${colors.black};
    color: ${colors.peach};
    margin-right: 5vw;
    padding: 16px;
    font-size: 24px;
    border: none;
    cursor: pointer;
`;

