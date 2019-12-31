import styled from 'styled-components';
import { colors } from '../settings/styles';

export const TagsWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0 0 3rem 0;
    padding: 0;

    * {
        margin-right: 1.5rem;
        font-size: 1.4rem;
        color: ${colors.mediumgray};
        background-color: ${colors.lightgray};
        padding: 0.5rem;
        border-radius: 3px;
    }

    &:last-child {
        margin-right: 0;
    }
`;