import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 -15px;
`;

export const Column = styled.div`
    flex-basis: 100%;
    padding: 0 15px;
    margin: 0 0 7.5rem;

    &.flex-4 {
        flex: calc(4 / 12);
    }

    &.flex-6 {
        flex: calc(6 / 12);
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
