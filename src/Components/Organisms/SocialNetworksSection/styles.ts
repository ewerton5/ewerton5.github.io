"use client";

import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Section = styled.section`
    ${({ theme }) => css`
        text-align: center;
        border-top: 1px solid ${theme.colors.gray[200]};
        padding-top: ${theme.spacings.large};

        h2 {
            color: ${theme.colors.secondary};
            margin-bottom: ${theme.spacings.large};
        }
    `}
`;

export const Links = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: center;
        gap: ${theme.spacings.medium};

        ${media.lessThan("medium")`
            flex-direction: column;
            padding: 0 ${theme.spacings.medium};
        `}
    `}
`;
