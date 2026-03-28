"use client";

import styled from "styled-components";

export const Card = styled.div`
    background: ${({ theme }) => theme.colors.white};
    border-radius: 16px;
    padding: ${({ theme }) => theme.spacings.large};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .quote-icon {
        position: absolute;
        top: 24px;
        right: 24px;
        font-size: 32px;
        color: ${({ theme }) => theme.colors.gray[200]};
        opacity: 0.5;
    }
`;

export const Quote = styled.p`
    font-size: ${({ theme }) => theme.fonts.size.small};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-style: italic;
    line-height: 1.7;
    margin-bottom: ${({ theme }) => theme.spacings.large};
    position: relative;
    z-index: 1;
`;

export const AuthorRow = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacings.small};
`;

export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`;

export const AuthorMeta = styled.div`
    h4 {
        font-size: ${({ theme }) => theme.fonts.size.small};
        color: ${({ theme }) => theme.colors.secondary};
        margin-bottom: 2px;
    }

    span {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.gray[500]};
    }
`;
