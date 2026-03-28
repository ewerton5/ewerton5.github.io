"use client";

import styled from "styled-components";

export const Section = styled.section`
    margin-bottom: ${({ theme }) => theme.spacings.large};

    h2 {
        text-align: center;
        margin-bottom: ${({ theme }) => theme.spacings.large};
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: ${({ theme }) => theme.spacings.medium};
`;
