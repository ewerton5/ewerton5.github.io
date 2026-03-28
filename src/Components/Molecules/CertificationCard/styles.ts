"use client";

import styled, { css } from "styled-components";

export const Card = styled.div`
    ${({ theme }) => css`
        background: ${theme.colors.white};
        padding: ${theme.spacings.medium};
        border-radius: 8px;
        border: 1px solid ${theme.colors.gray[200]};
        transition:
            transform 0.2s,
            border-color 0.2s;

        &:hover {
            transform: translateY(-4px);
            border-color: ${theme.colors.primary};
        }

        h4 {
            font-size: ${theme.fonts.size.small};
            color: ${theme.colors.secondary};
            margin-bottom: ${theme.spacings.xxsmall};
        }

        p {
            font-size: 1.4rem;
            color: ${theme.colors.textSecondary};
            margin-bottom: ${theme.spacings.xsmall};
        }

        span {
            font-size: 1.2rem;
            color: ${theme.colors.primary};
            font-weight: ${theme.fonts.weight.bold};
        }
    `}
`;
