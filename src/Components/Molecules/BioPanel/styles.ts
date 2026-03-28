"use client";

import styled from "styled-components";

export const Panel = styled.div`
    background: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacings.large};
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

    p {
        font-size: ${({ theme }) => theme.fonts.size.medium};
        line-height: 1.8;
        color: ${({ theme }) => theme.colors.textSecondary};
        margin-bottom: ${({ theme }) => theme.spacings.medium};

        &:last-child {
            margin-bottom: 0;
        }

        strong {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;
