"use client";

import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Title = styled.h1`
    ${({ theme }) => css`
        font-size: ${theme.fonts.size.xxlarge};
        line-height: 1.2;
        color: ${theme.colors.secondary};
        margin-bottom: ${theme.spacings.medium};

        span {
            color: ${theme.colors.primary};
        }

        ${media.lessThan("large")`
            font-size: 3.6rem;
        `}

        ${media.lessThan("medium")`
            font-size: ${theme.fonts.size.xlarge};
        `}
    `}
`;
