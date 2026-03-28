"use client";

import styled, { css } from "styled-components";

export const Header = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        gap: ${theme.spacings.small};
        margin-bottom: ${theme.spacings.large};
        border-bottom: 2px solid ${theme.colors.gray[200]};
        padding-bottom: ${theme.spacings.xsmall};

        h2 {
            font-size: ${theme.fonts.size.large};
            color: ${theme.colors.secondary};
        }

        svg {
            font-size: 2.4rem;
            color: ${theme.colors.primary};
        }
    `}
`;
