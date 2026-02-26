import styled, { css } from "styled-components";
import media from "styled-media-query";

export const AboutContainer = styled.div`
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
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacings.large};
`;

/* --- Bio Section --- */
export const BioSection = styled.section`
    margin-bottom: ${({ theme }) => theme.spacings.xxlarge};
`;

export const BioText = styled.div`
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

/* --- Timeline Section --- */
export const TimelineSection = styled.section`
    margin-bottom: ${({ theme }) => theme.spacings.xxlarge};

    h2 {
        text-align: center;
        margin-bottom: ${({ theme }) => theme.spacings.large};
    }
`;

export const TimelineItem = styled.div`
    display: flex;
    margin-bottom: ${({ theme }) => theme.spacings.medium};
    background: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    ${media.lessThan("large")`
        flex-direction: column;
    `}
`;

export const TimelineYear = styled.div`
    ${({ theme }) => css`
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
        padding: ${theme.spacings.medium};
        width: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: ${theme.fonts.weight.bold};
        font-size: ${theme.fonts.size.medium};

        ${media.lessThan("large")`
        width: 100%;
        padding: ${theme.spacings.small};
    `}
    `}
`;

export const TimelineContent = styled.div`
    padding: ${({ theme }) => theme.spacings.medium};
    flex: 1;

    h3 {
        margin-bottom: ${({ theme }) => theme.spacings.xsmall};
        color: ${({ theme }) => theme.colors.secondary};
    }

    p {
        color: ${({ theme }) => theme.colors.textSecondary};
        line-height: 1.6;
    }
`;

/* --- Setup Section --- */
export const SetupSection = styled.section`
    margin-bottom: ${({ theme }) => theme.spacings.large};

    h2 {
        text-align: center;
        margin-bottom: ${({ theme }) => theme.spacings.large};
    }
`;

export const SetupGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: ${({ theme }) => theme.spacings.medium};
`;

export const SetupCard = styled.div`
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
