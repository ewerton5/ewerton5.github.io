import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const Main = styled.main`
    ${({ theme }) => css`
        flex: 1;
        width: 100%;
        max-width: 1120px;
        margin: 0 auto;
        padding: ${theme.spacings.large} ${theme.spacings.small};
    `}
`;
