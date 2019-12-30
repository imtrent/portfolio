import styled from 'styled-components';
import { colors } from '../../settings/styles';

const Burger = styled.div`
    position: relative;
    display: block;
    z-index: 2;
    cursor: pointer;

    div {
        height: 2px;
        margin-bottom: 5px;
        background-color: ${colors.black};
        border-radius: 1px;
        transition: 0.3s;
        width: 24px;

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    &.toggle {
        div {
            &:first-of-type {
                transform: rotate(-45deg) translate(-4px, 6px);
                background-color: white;
            }

            &:first-of-type + div {
                width: 0;
                opacity: 0;
            }

            &:last-of-type {
                transform: rotate(45deg) translate(-4px, -6px);
                width: 24px;
                background-color: white;
            }
        }
    }
`;

export default Burger;
