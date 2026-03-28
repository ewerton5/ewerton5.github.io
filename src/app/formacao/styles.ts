"use client";

import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
    width: 100%;
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
        margin-bottom: ${theme.spacings.xlarge};
        color: ${theme.colors.secondary};
    `}
`;

export const SectionWrapper = styled.section`
    ${({ theme }) => css`
        margin-bottom: ${theme.spacings.xxlarge};
    `}
`;

export const SectionHeader = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        gap: ${theme.spacings.small};
        margin-bottom: ${theme.spacings.large};
        border-bottom: 2px solid ${theme.colors.gray[200]};
        padding-bottom: ${theme.spacings.xsmall};

        h2 {
            font-size: ${theme.fonts.size.large};
            color: ${theme.colors.secondary};
        }

        svg {
            font-size: 2.4rem;
            color: ${theme.colors.primary};
        }
    `}
`;

/* --- Academic --- */
export const AcademicGrid = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: ${theme.spacings.large};
    `}
`;

export const AcademicCard = styled.div`
    ${({ theme }) => css`
        background: ${theme.colors.white};
        border-left: 4px solid ${theme.colors.primary};
        padding: ${theme.spacings.large};
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

        h3 {
            font-size: ${theme.fonts.size.medium};
            color: ${theme.colors.secondary};
            margin-bottom: ${theme.spacings.xxsmall};
        }

        h4 {
            font-size: ${theme.fonts.size.small};
            color: ${theme.colors.text};
            font-weight: ${theme.fonts.weight.medium};
            margin-bottom: ${theme.spacings.xsmall};
        }

        span {
            display: inline-block;
            background: ${theme.colors.gray[100]};
            color: ${theme.colors.gray[600]};
            padding: 4px 12px;
            border-radius: 16px;
            font-size: 1.2rem;
            margin-bottom: ${theme.spacings.small};
            font-weight: ${theme.fonts.weight.bold};
        }

        p {
            color: ${theme.colors.textSecondary};
            line-height: 1.6;
            font-size: ${theme.fonts.size.small};
        }
    `}
`;

/* --- Certifications --- */
export const CertificationsGrid = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: ${theme.spacings.medium};
    `}
`;

export const CertCard = styled.div`
    ${({ theme }) => css`
        background: ${theme.colors.white};
        padding: ${theme.spacings.medium};
        border-radius: 8px;
        border: 1px solid ${theme.colors.gray[200]};
        transition:
            transform 0.2s,
            border-color 0.2s;

        &:hover {
            transform: translateY(-4px);
            border-color: ${theme.colors.primary};
        }

        h4 {
            font-size: ${theme.fonts.size.small};
            color: ${theme.colors.secondary};
            margin-bottom: ${theme.spacings.xxsmall};
        }

        p {
            font-size: 1.4rem;
            color: ${theme.colors.textSecondary};
            margin-bottom: ${theme.spacings.xsmall};
        }

        span {
            font-size: 1.2rem;
            color: ${theme.colors.primary};
            font-weight: ${theme.fonts.weight.bold};
        }
    `}
`;

/* --- Languages --- */
export const LanguagesFlex = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-wrap: wrap;
        gap: ${theme.spacings.medium};

        ${media.lessThan("medium")`
            flex-direction: column;
        `}
    `}
`;

export const LangBadge = styled.div`
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
