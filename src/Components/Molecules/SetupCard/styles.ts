"use client";

import styled from "styled-components";

export const Card = styled.div`
    background: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacings.large};
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    text-align: center;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-5px);
    }

    svg {
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: ${({ theme }) => theme.spacings.small};
    }

    h3 {
        margin-bottom: ${({ theme }) => theme.spacings.small};
        color: ${({ theme }) => theme.colors.secondary};
    }

    p {
        color: ${({ theme }) => theme.colors.textSecondary};
        line-height: 1.5;
        font-size: ${({ theme }) => theme.fonts.size.small};
    }
`;
