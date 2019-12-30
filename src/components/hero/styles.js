import styled from 'styled-components';
import { breakpoints } from '../settings/styles';

export default styled.main`
    margin: 10rem 0;

    @media screen and (min-width: ${breakpoints.medium}) {
        margin: 20rem 0;
    }
`;
