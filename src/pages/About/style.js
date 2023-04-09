import styled from 'styled-components';
import { colors } from '../../resources/theme';

export const Container = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.isMobile ? 'column' : 'row')};
`;

export const Paragraph = styled.p`
    color: ${colors.white};
`;
