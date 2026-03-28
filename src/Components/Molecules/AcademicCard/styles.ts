"use client";

import styled, { css } from "styled-components";

export const Card = styled.div`
    ${({ theme }) => css`
        background: ${theme.colors.white};
        border-left: 4px solid ${theme.colors.primary};
        padding: ${theme.spacings.large};
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

        h3 {
            font-size: ${theme.fonts.size.medium};
            color: ${theme.colors.secondary};
            margin-bottom: ${theme.spacings.xxsmall};
        }

        h4 {
            font-size: ${theme.fonts.size.small};
            color: ${theme.colors.text};
            font-weight: ${theme.fonts.weight.medium};
            margin-bottom: ${theme.spacings.xsmall};
        }

        span {
            display: inline-block;
            background: ${theme.colors.gray[100]};
            color: ${theme.colors.gray[600]};
            padding: 4px 12px;
            border-radius: 16px;
            font-size: 1.2rem;
            margin-bottom: ${theme.spacings.small};
            font-weight: ${theme.fonts.weight.bold};
        }

        p {
            color: ${theme.colors.textSecondary};
            line-height: 1.6;
            font-size: ${theme.fonts.size.small};
        }
    `}
`;
