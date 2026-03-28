"use client";

import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacings.medium};
    margin-top: ${({ theme }) => theme.spacings.large};

    ${media.lessThan("medium")`
        flex-direction: column;
        align-items: center;

        button {
            width: 100%;
            max-width: 300px;
        }
    `}
`;
