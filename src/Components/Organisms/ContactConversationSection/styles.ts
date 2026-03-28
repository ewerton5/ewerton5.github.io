"use client";

import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Title = styled.h1`
    ${({ theme }) => css`
        text-align: center;
        margin-bottom: ${theme.spacings.medium};
        color: ${theme.colors.secondary};
    `}
`;

export const Intro = styled.p`
    ${({ theme }) => css`
        text-align: center;
        color: ${theme.colors.textSecondary};
        font-size: ${theme.fonts.size.medium};
        line-height: 1.6;
        margin-bottom: ${theme.spacings.xxlarge};
        padding: 0 ${theme.spacings.large};

        ${media.lessThan("medium")`
            padding: 0;
            font-size: ${theme.fonts.size.small};
        `}
    `}
`;

export const Grid = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: ${theme.spacings.large};
        margin-bottom: ${theme.spacings.xxlarge};
    `}
`;
