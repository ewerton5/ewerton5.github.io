"use client";

import styled from "styled-components";

export const Section = styled.section`
    margin-bottom: ${({ theme }) => theme.spacings.xxlarge};

    h2 {
        text-align: center;
        margin-bottom: ${({ theme }) => theme.spacings.large};
    }
`;
