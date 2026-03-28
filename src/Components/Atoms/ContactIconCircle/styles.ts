"use client";

import styled, { css } from "styled-components";

export const Circle = styled.div<{ $color: string }>`
    ${({ theme, $color }) => css`
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: ${$color}15;
        color: ${$color};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        margin-bottom: ${theme.spacings.medium};
    `}
`;
