"use client";

import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Row = styled.div`
    display: flex;
    margin-bottom: ${({ theme }) => theme.spacings.medium};
    background: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    ${media.lessThan("large")`
        flex-direction: column;
    `}
`;

export const Year = styled.div`
    ${({ theme }) => css`
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
        padding: ${theme.spacings.medium};
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: ${theme.fonts.weight.bold};
        font-size: ${theme.fonts.size.medium};

        ${media.lessThan("large")`
            width: 100%;
            padding: ${theme.spacings.small};
        `}
    `}
`;

export const Body = styled.div`
    padding: ${({ theme }) => theme.spacings.medium};
    flex: 1;

    h3 {
        margin-bottom: ${({ theme }) => theme.spacings.xsmall};
        color: ${({ theme }) => theme.colors.secondary};
    }

    p {
        color: ${({ theme }) => theme.colors.textSecondary};
        line-height: 1.6;
    }
`;
