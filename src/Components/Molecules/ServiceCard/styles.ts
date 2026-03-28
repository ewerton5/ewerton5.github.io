"use client";

import styled from "styled-components";

export const IconWrapper = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background: ${({ theme }) => theme.colors.primary}15;
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.spacings.medium};
`;

export const Card = styled.div`
    background: ${({ theme }) => theme.colors.white};
    border-radius: 16px;
    padding: ${({ theme }) => theme.spacings.large};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 24px rgba(10, 116, 218, 0.1);
    }

    h3 {
        margin-bottom: ${({ theme }) => theme.spacings.small};
        font-size: ${({ theme }) => theme.fonts.size.medium};
    }

    p {
        color: ${({ theme }) => theme.colors.textSecondary};
        line-height: 1.6;
    }
`;
