import styled, { keyframes } from 'styled-components';
import { colors, fontFamily } from '../settings/styles';

export const HeaderWrapper = styled.header`
    margin: 20px 0 0 0;
    position: sticky;
    top: 0;
    background-color: white;
    padding: 30px 0;
    z-index: 2;

    &.stuck {
        border-bottom: 1px solid ${colors.border};
    }
`;

export const Navbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const showMenu = keyframes`
    from {
        opacity: 0;
        transform: translateY(100px);
    }
    to {
        opacity: 1;
        transform: translateY(0px);
    }
`;

const hideMenu = keyframes`
    from {
        opacity: 1;
        transform: translateY(0px);
    }
    to {
        opacity: 0;
        transform: translateY(100px);
    }
`;

export const Menu = styled.div`
    opacity: 1;
    max-width: 1200px;
    margin: 16rem auto 0 auto;
    padding: 0 2rem;
    font-size: 3.2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    a {
        position: relative;
        color: #a0a0a2;
        margin-bottom: 3rem;
        padding-bottom: 0.5rem;
        letter-spacing: 1px;
        transition: 0.3s ease;
        font-family: 'DM Serif Text', serif;


        &.active {
            color: white;

            &:after {
                width: 100%;
                background-color: white;
            }
        }

        &:hover {
            color: white;
            &:after {
                width: 100%;
                background-color: white;
            }
        }

        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #a0a0a2;
            transition: 0.3s ease;
        }
    }

    .active & {
        animation: ${showMenu} 0.4s ease both;
        animation-delay: 0.4s;
    }
`;

export const Logo = styled.div`
    z-index: 2;
    a {
        position: relative;
        margin: 0;
        color: ${colors.black};
        font-size: 2rem;
        font-weight: normal;
        transition: 0.3s ease;
        letter-spacing: 1px;
        font-family: ${fontFamily.dmSerif};

        ${({ active }) =>
        active &&
        `
            color: white;

            &:hover {
                color: white !important;
                &:after {
                    background-color: white;
                }
            }
        `}

        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: ${colors.black};
            transition: 0.5s ease;
        }

        &:hover {
            &:after {
                width: 100%;
            }
        }
    }
`;

export const Socials = styled.div`
    a {
        margin-right: 3rem;

        &:last-of-type {
            margin-right: 0;
        }
    }
`;

const slideIn = keyframes`
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0%);
    }
`;

const slideOut = keyframes`
    from {
        transform: translateY(0%);
    }
    to {
        transform: translateY(100%);
    }
`;

export const Navigation = styled.nav`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.black};
    transform: translateY(-100%);
    transition: 0.3s ease;
    z-index: 1;

    &.active {
        display: block;
        visibility: visible;
        animation: ${slideIn} 0.4s cubic-bezier(0.645, 0.05, 0.355, 1) both;
        animation-fill-mode: both;
        animation-play-state: running;
    }

    &.hidden {
        display: block;
        transform: translateY(-100%);
        animation: ${slideOut} 0.4s cubic-bezier(0.645, 0.05, 0.355, 1) both;
        /* animation-delay: 0.4s; */
        animation-fill-mode: both;
        animation-play-state: running;
    }
`;
