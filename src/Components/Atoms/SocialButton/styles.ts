"use client";

import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Link = styled.a`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${theme.spacings.small};
        background: ${theme.colors.gray[50]};
        color: ${theme.colors.secondary};
        padding: ${theme.spacings.small} ${theme.spacings.large};
        border-radius: 8px;
        font-weight: ${theme.fonts.weight.medium};
        text-decoration: none;
        transition:
            background 0.2s,
            color 0.2s;
        border: 1px solid ${theme.colors.gray[200]};

        &:hover {
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
            border-color: ${theme.colors.primary};
        }

        ${media.lessThan("medium")`
            width: 100%;
        `}
    `}
`;
