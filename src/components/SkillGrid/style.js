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

    #row-one {
        background-color: blue;
    }

    #row-two {
        background-color: purple;
        display: grid;
        grid-template-columns: 20% 60% 20%;
        text-align: center;
        align-items: center;
    }

    #row-three {
        background-color: green;
    }

    #row-one, #row-three {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`;
