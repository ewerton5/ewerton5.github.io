"use client";

import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Section = styled.section`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 80vh;
        gap: ${theme.spacings.large};
        padding-bottom: ${theme.spacings.xxlarge};

        ${media.lessThan("medium")`
            flex-direction: column-reverse;
            text-align: center;
            min-height: auto;
            padding-top: ${theme.spacings.large};
        `}
    `}
`;

export const Content = styled.div`
    flex: 1;
`;
