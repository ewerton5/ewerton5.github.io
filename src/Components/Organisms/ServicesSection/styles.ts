"use client";

import styled from "styled-components";

export const Section = styled.section`
    padding: ${({ theme }) => theme.spacings.xxlarge} 0;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: ${({ theme }) => theme.spacings.large};
`;
