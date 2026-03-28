"use client";

import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Image = styled.img`
    ${({ theme }) => css`
        width: 380px;
        height: 380px;
        border-radius: 50%;
        object-fit: cover;
        border: 6px solid ${theme.colors.white};
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

        ${media.lessThan("large")`
            width: 300px;
            height: 300px;
        `}

        ${media.lessThan("medium")`
            width: 250px;
            height: 250px;
            margin-bottom: ${theme.spacings.medium};
        `}
    `}
`;
