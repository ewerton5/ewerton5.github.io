"use client";

import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Badge = styled.div`
    ${({ theme }) => css`
        background: ${theme.colors.gray[50]};
        border: 1px solid ${theme.colors.gray[200]};
        padding: ${theme.spacings.small} ${theme.spacings.medium};
        border-radius: 50px;
        font-size: ${theme.fonts.size.small};
        color: ${theme.colors.text};

        strong {
            color: ${theme.colors.secondary};
        }
    `}
`;

export const List = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-wrap: wrap;
        gap: ${theme.spacings.medium};

        ${media.lessThan("medium")`
            flex-direction: column;
        `}
    `}
`;
