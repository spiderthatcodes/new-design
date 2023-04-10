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
        color: ${colors.white};
        font-size: 25px;
        padding: 12px 16px;
        text-decoration: none;
    }

    a:hover {
        text-shadow: 0px 0px 15px rgba(2, 128, 144, 0.49);
    }
`;

export const Logo = styled.img`
    width: 225px;
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
    background-color: ${colors.black};
    min-width: 100px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    .open {
        display: block;
    }

    a {
        color: ${colors.tan};;
        padding: 10px 16px;
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

