import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-wrap: wrap;
    margin: 0 -15px;
`;

export const Column = styled.div`
    flex-basis: 100%;
    flex: 1;
    padding: 0 15px;
    margin: 0 0 7.5rem;

    &.flex-4 {
        flex: calc(4 / 12);
    }

    &.flex-6 {
        @media only screen and (min-width: 768px) {
            flex-basis: calc(50% - 30px);
            max-width: calc(50% - 30px);
        }
        flex-basis: 100%;
    }

    &.flex-8 {
        flex: calc(8 / 12);
    }
`;

export const Container = styled.div`
    margin: auto;
    padding: 0 20px;
    &.large {
        max-width: 1200px;
    }
    &.medium {
        max-width: 1000px;
    }
    &.small {
        max-width: 900px;
    }
`;
