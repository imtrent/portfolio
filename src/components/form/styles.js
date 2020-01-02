import styled from 'styled-components';
import { colors } from '../settings/styles';

export const InputField = styled.div`
    margin: 0 15px;
    flex: 1;

    label {
        display: block;
        font-size: 1.6rem;
        color: ${colors.mediumgray};
    }
    input {
        border: 1px solid transparent;
        outline: none;
        box-sizing: border-box;
        background-color: ${colors.lightgray};
        width: 100%;
        height: 40px;
        border-radius: 3px;
        font-size: 1.6rem;
        padding: 0 0 0 1rem;
    }
`;

export const InputGroup = styled.div`
    display: flex;
    margin: 0 -15px;
    width: 100%;
`;