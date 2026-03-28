"use client";

import styled, { css } from "styled-components";

export const Section = styled.section`
    ${({ theme }) => css`
        margin-bottom: ${theme.spacings.xxlarge};
    `}
`;

export const Grid = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: ${theme.spacings.medium};
    `}
`;
