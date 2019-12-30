import styled, { keyframes, createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
    ${styledNormalize}
    body {
        @import url('https://rsms.me/inter/inter.css');
        font-family: 'Inter', sans-serif;

        a {
            text-decoration: none;
        }
    }

    html {
        font-size: 62.5%;
    }
`;

export const colors = {
    primary: '#1690FE',
    black: '#47535E',
    darkgray: '#656D78',
    mediumgray: '#6F768C',
    lightgray: '#F6F6F6',
    border: '#CDCFD3'
};

export const breakpoints = {
    small: '0px',
    medium: '667px',
    large: '1024px',
    xlarge: '1200px'
};

export const fontFamily = {
    inter: `'Inter', sans-serif`,
    dmSerif: `'DM Serif Text', serif`
};

export const Title = styled.h1`
    color: ${colors.black};
    font-size: 3rem;
    font-weight: normal;
    line-height: 1.2;
    font-family: ${fontFamily.dmSerif};
    margin: ${props => props.margin};

    span {
        color: ${colors.primary};
    }

    svg {
        position: relative;
        top: 5px;
    }

    @media screen and (min-width: ${breakpoints.medium}) {
        font-size: 3.2rem;
        max-width: 850px;
        letter-spacing: 1px;
    }

    @media screen and (min-width: ${breakpoints.large}) {
        font-size: 4.8rem;
        max-width: 1000px;
    }
`;

export const Subtitle = styled.h2`
    color: ${colors.black};
    font-weight: normal;
    letter-spacing: 1px;
    font-size: 2.4rem;
    margin: ${props => props.margin};
    font-family: ${fontFamily.dmSerif};
`;

export const Description = styled.p`
    color: ${colors.mediumgray};
    font-size: ${props => props.fontBreakOne};
    font-weight: 300;
    margin: ${props => props.margin};
    line-height: 1.5;

    @media screen and (min-width: ${breakpoints.large}) {
        font-size: ${props => props.fontSize};
    }

    a {
        color: ${colors.darkgray};
    }
`;

const bounce = keyframes`
    0% {
        left: 0;
    }
    20% {
        left: 10px;
    }
    40% {
        left: 0;
    }
    100% {
        left: 0;
    }
`;

export const Direct = styled.span`
    font-size: ${props => props.fontBreakOne};
    border-bottom: 1px solid ${colors.border};
    padding-bottom: 1rem;
    color: ${colors.black};
    transition: 0.3s ease;
    display: inline-block;
    font-weight: 300;

    @media screen and (min-width: ${breakpoints.large}) {
        font-size: ${props => props.fontSize};
    }

    .arrow {
        position: relative;
        animation: ${bounce} 3s infinite;
        animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
    }

    &:hover {
        border-color: ${colors.black};
    }
`;
