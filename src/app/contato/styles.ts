"use client";

import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    animation: fadeIn 0.5s ease-in-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

export const PageTitle = styled.h1`
    ${({ theme }) => css`
        text-align: center;
        margin-bottom: ${theme.spacings.medium};
        color: ${theme.colors.secondary};
    `}
`;

export const ContactText = styled.p`
    ${({ theme }) => css`
        text-align: center;
        color: ${theme.colors.textSecondary};
        font-size: ${theme.fonts.size.medium};
        line-height: 1.6;
        margin-bottom: ${theme.spacings.xxlarge};
        padding: 0 ${theme.spacings.large};

        ${media.lessThan("medium")`
            padding: 0;
            font-size: ${theme.fonts.size.small};
        `}
    `}
`;

export const ContactGrid = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: ${theme.spacings.large};
        margin-bottom: ${theme.spacings.xxlarge};
    `}
`;

export const ContactCard = styled.a`
    ${({ theme }) => css`
        background: ${theme.colors.white};
        padding: ${theme.spacings.large};
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        text-decoration: none;
        transition:
            transform 0.2s,
            box-shadow 0.2s;

        &:not(div):hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }
    `}
`;

export const IconWrapper = styled.div<{ $color: string }>`
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

export const CardContent = styled.div`
    ${({ theme }) => css`
        h3 {
            color: ${theme.colors.secondary};
            font-size: ${theme.fonts.size.medium};
            margin-bottom: ${theme.spacings.xsmall};
        }

        p {
            color: ${theme.colors.text};
            font-weight: ${theme.fonts.weight.medium};
            font-size: ${theme.fonts.size.small};
            margin-bottom: ${theme.spacings.xxsmall};
        }

        span {
            color: ${theme.colors.textSecondary};
            font-size: 1.2rem;
        }
    `}
`;

export const SocialSection = styled.div`
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

export const SocialLinks = styled.div`
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

export const SocialButton = styled.a`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${theme.spacings.small};
        background: ${theme.colors.gray[50]};
        color: ${theme.colors.secondary};
        padding: ${theme.spacings.small} ${theme.spacings.large};
        border-radius: 8px;
        font-weight: ${theme.fonts.weight.medium};
        text-decoration: none;
        transition:
            background 0.2s,
            color 0.2s;
        border: 1px solid ${theme.colors.gray[200]};

        &:hover {
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
            border-color: ${theme.colors.primary};
        }
    `}
`;
