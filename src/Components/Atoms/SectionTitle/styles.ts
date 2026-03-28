"use client";

import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Title = styled.h2`
    ${({ theme }) => css`
        text-align: center;
        font-size: ${theme.fonts.size.xlarge};
        color: ${theme.colors.secondary};
        margin-bottom: ${theme.spacings.xlarge};
        position: relative;

        &::after {
            content: "";
            display: block;
            width: 60px;
            height: 4px;
            background: ${theme.colors.primary};
            margin: ${theme.spacings.small} auto 0;
            border-radius: 2px;
        }

        ${media.lessThan("medium")`
            font-size: ${theme.fonts.size.large};
        `}
    `}
`;
