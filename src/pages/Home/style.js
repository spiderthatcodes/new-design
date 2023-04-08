import styled from 'styled-components'
import { colors } from '../../resources/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        color: ${colors.peach};
        font-size: 86px;
        padding: 38px;
        line-height: 48px;
    }

    span:hover {
        color: ${colors.white};
        font-size: 88px;
        text-shadow: 0px 0px 12px ${colors.white};
    }
`;



