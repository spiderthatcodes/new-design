import styled from 'styled-components'
import { colors } from '../../resources/theme';

export const GridContainer = styled.div`
    position: absolute;
    width: 100%;
    top: 70px;
    right: 0;
    bottom: 0;
`;

export const Grid = styled.div`
    height: fit-content;
    display: grid;
    grid-template-rows: 14vh 18vh 14vh;

    #row-two {
        display: grid;
        grid-template-columns: 20% 60% 20%;
        text-align: center;
        align-items: center;
    }

    #row-one, #row-three {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    #cert {
        font-size: 64px;
        color: ${colors.peach};
    }

    .skill {
        color: ${colors.black};
        font-size: 32px;
    }

    .visible {
        color: ${colors.white};
        text-shadow: 0px 0px 8px ${colors.tan};
        font-size: 38px;
    }
`;
