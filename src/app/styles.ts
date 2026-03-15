import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
    width: 100%;
`;

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 70vh;
    gap: ${({ theme }) => theme.spacings.large};

    ${media.lessThan("medium")`
        flex-direction: column-reverse;
        text-align: center;
        min-height: auto;
    `}
`;

export const Content = styled.div`
    flex: 1;
`;

export const Title = styled.h1`
    ${({ theme }) => css`
        font-size: ${theme.fonts.size.xxlarge};
        line-height: 1.2;

        span {
            color: ${theme.colors.primary};
        }

        ${media.lessThan("medium")`
            font-size: ${theme.fonts.size.xlarge};
        `}
    `}
`;

export const Subtitle = styled.h2`
    font-size: ${({ theme }) => theme.fonts.size.medium};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: ${({ theme }) => theme.fonts.weight.regular};
    margin-top: ${({ theme }) => theme.spacings.small};
`;

export const ButtonWrapper = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacings.small};
    margin-top: ${({ theme }) => theme.spacings.large};

    ${media.lessThan("medium")`
        justify-content: center;
    `}
`;

export const Image = styled.img`
    ${({ theme }) => css`
        width: 350px;
        height: 350px;
        border-radius: 50%;
        object-fit: cover;
        border: 5px solid ${theme.colors.primary};

        ${media.lessThan("medium")`
            width: 250px;
            height: 250px;
            margin-bottom: ${theme.spacings.medium};
        `}
    `}
`;
