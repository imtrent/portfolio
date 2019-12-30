import styled from 'styled-components';
import { colors, breakpoints, fontFamily } from '../settings/styles';

export const FooterWrapper = styled.footer`
    background-color: ${colors.lightgray};
    padding: 100px 0;
    font-family: ${fontFamily.dmSerif};

    @media (min-width: ${breakpoints.medium}) {
        padding: 100px 0;
    }
`;

export const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.6rem;

    @media (min-width: ${breakpoints.medium}) {
        justify-content: space-between;
        flex-direction: row;
        align-items: initial;
    }
`;

export const Copyright = styled.p`
    margin: 0 0 30px 0;
    color: ${colors.darkgray};
    @media (min-width: ${breakpoints.medium}) {
        margin: 0;
    }
`;

export const SocialWrapper = styled.div`
    display: block;
`;

export const Social = styled.a`
    color: ${colors.darkgray};
    margin-right: 50px;
    transition: 0.3s ease;

    &:last-of-type {
        margin-right: 0;
    }

    &:hover {
        color: ${colors.primary};
    }
`;
