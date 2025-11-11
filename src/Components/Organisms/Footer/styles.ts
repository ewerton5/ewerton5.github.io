import styled, { css } from "styled-components";
import media from "styled-media-query";

export const FooterContainer = styled.footer`
    background-color: ${({ theme }) => theme.colors.white};
    border-top: 1px solid ${({ theme }) => theme.colors.gray[200]};
    padding: ${({ theme }) => theme.spacings.large} 0;
`;

export const FooterWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacings.small};
`;

export const SocialMedia = styled.section`
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        ${media.lessThan("medium")`
            flex-direction: column;
            gap: ${theme.spacings.small};
        `}
    `}
`;

export const WebsiteRights = styled.small`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: ${({ theme }) => theme.fonts.size.xsmall};
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({ theme }) => theme.spacings.small};
`;

export const SocialIconLink = styled.a`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 2.4rem;
    transition: color 0.2s;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;
