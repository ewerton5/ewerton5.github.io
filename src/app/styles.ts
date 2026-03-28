"use client";

import styled, { css } from "styled-components";
import media from "styled-media-query";

export const HomeContainer = styled.div`
    width: 100%;
    animation: fadeIn 0.6s ease-in-out;

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

export const SectionTitle = styled.h2`
    ${({ theme }) => css`
        text-align: center;
        font-size: ${theme.fonts.size.xlarge};
        color: ${theme.colors.secondary};
        margin-bottom: ${theme.spacings.xlarge};
        position: relative;

        &::after {
            content: "";
            display: block;
            width: 60px;
            height: 4px;
            background: ${theme.colors.primary};
            margin: ${theme.spacings.small} auto 0;
            border-radius: 2px;
        }

        ${media.lessThan("medium")`
            font-size: ${theme.fonts.size.large};
        `}
    `}
`;

/* ================= HERO SECTION ================= */
export const HeroSection = styled.section`
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

export const HeroContent = styled.div`
    flex: 1;
`;

export const HeroTitle = styled.h1`
    ${({ theme }) => css`
        font-size: ${theme.fonts.size.xxlarge};
        line-height: 1.2;
        color: ${theme.colors.secondary};
        margin-bottom: ${theme.spacings.medium};

        span {
            color: ${theme.colors.primary};
        }

        ${media.lessThan("large")`
            font-size: 3.6rem;
        `}

        ${media.lessThan("medium")`
            font-size: ${theme.fonts.size.xlarge};
        `}
    `}
`;

export const HeroSubtitle = styled.h2`
    font-size: ${({ theme }) => theme.fonts.size.medium};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
    line-height: 1.6;

    strong {
        color: ${({ theme }) => theme.colors.text};
    }
`;

export const HeroButtonWrapper = styled.div`
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

export const HeroImage = styled.img`
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

/* ================= SERVICES SECTION ================= */
export const ServicesSection = styled.section`
    padding: ${({ theme }) => theme.spacings.xxlarge} 0;
`;

export const ServicesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: ${({ theme }) => theme.spacings.large};
`;

export const ServiceCard = styled.div`
    background: ${({ theme }) => theme.colors.white};
    border-radius: 16px;
    padding: ${({ theme }) => theme.spacings.large};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 24px rgba(10, 116, 218, 0.1); /* Primary color shadow */
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

export const ServiceIconWrapper = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background: ${({ theme }) =>
        theme.colors.primary}15; /* 15% opacity primary */
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${({ theme }) => theme.spacings.medium};
`;

/* ================= TESTIMONIALS SECTION ================= */
export const TestimonialsSection = styled.section`
    padding: ${({ theme }) => theme.spacings.xxlarge} 0;
`;

export const TestimonialsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: ${({ theme }) => theme.spacings.large};
`;

export const TestimonialCard = styled.div`
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

export const TestimonialQuote = styled.p`
    font-size: ${({ theme }) => theme.fonts.size.small};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-style: italic;
    line-height: 1.7;
    margin-bottom: ${({ theme }) => theme.spacings.large};
    position: relative;
    z-index: 1;
`;

export const TestimonialAuthor = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacings.small};
`;

export const AuthorAvatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`;

export const AuthorInfo = styled.div`
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
