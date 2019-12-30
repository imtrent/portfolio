import styled from 'styled-components';
import { colors, fontFamily, breakpoints } from '../settings/styles';

export const CTAWrapper = styled.div`
    display: flex;
    margin-bottom: 20rem;
    flex-direction: column;

    @media screen and (min-width: ${breakpoints.medium}) {
        padding: 5rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: ${colors.black};
        padding: 3rem;
        border-radius: 3px;
    }

    @media screen and (min-width: ${breakpoints.large}) {
        padding: 6rem 10rem;
    }

    a {
        display: inline-block;
        padding: 1rem 3.5rem;
        border-radius: 3px;
        background-color: white;
        color: ${colors.black};
        font-size: 1.6rem;
        transition: 0.3s ease;

        &:hover {
            background-color: ${colors.border};
        }
    }
`;

export const CTATitle = styled.h3`
    color: ${colors.black};
    font-family: ${fontFamily.dmSerif};
    font-size: 3.2rem;
    margin: 0 0 2rem;

    @media screen and (min-width: ${breakpoints.medium}) {
        color: white;
    }
`;

export const CTADescription = styled.p`
    margin: 0;
    color: ${colors.black};
    font-family: ${fontFamily.inter};
    font-size: 1.8rem;
    font-weight: 300;

    @media screen and (min-width: ${breakpoints.medium}) {
        color: white;
    }
`;
