"use client";

import styled, { css } from "styled-components";

export const Card = styled.a`
    ${({ theme }) => css`
        background: ${theme.colors.white};
        padding: ${theme.spacings.large};
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        text-decoration: none;
        transition:
            transform 0.2s,
            box-shadow 0.2s;

        &:not(div):hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }
    `}
`;

export const Body = styled.div`
    ${({ theme }) => css`
        h3 {
            color: ${theme.colors.secondary};
            font-size: ${theme.fonts.size.medium};
            margin-bottom: ${theme.spacings.xsmall};
        }

        p {
            color: ${theme.colors.text};
            font-weight: ${theme.fonts.weight.medium};
            font-size: ${theme.fonts.size.small};
            margin-bottom: ${theme.spacings.xxsmall};
        }

        span {
            color: ${theme.colors.textSecondary};
            font-size: 1.2rem;
        }
    `}
`;
