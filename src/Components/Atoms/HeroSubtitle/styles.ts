"use client";

import styled from "styled-components";

export const Subtitle = styled.h2`
    font-size: ${({ theme }) => theme.fonts.size.medium};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
    line-height: 1.6;

    strong {
        color: ${({ theme }) => theme.colors.text};
    }
`;
