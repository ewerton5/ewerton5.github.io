import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Nav = styled.nav`
    background: ${({ theme }) => theme.colors.white};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fonts.size.small};
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100%;
    max-width: 1120px;
    padding: 0 ${({ theme }) => theme.spacings.small};
`;

export const NavLogoContainer = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacings.xsmall};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fonts.size.medium};
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    cursor: pointer;

    img {
        height: 40px;
    }
`;

export const MobileIcon = styled.div`
    ${({ theme }) => css`
        display: none;

        ${media.lessThan("medium")`
            display: block;
            font-size: 2.4rem;
            color: ${theme.colors.secondary};
            cursor: pointer;
        `}
    `}
`;

export const NavMenu = styled.ul<{ $isOpen: boolean }>`
    ${({ theme, $isOpen }) => css`
        display: flex;
        align-items: center;
        list-style: none;
        text-align: center;

        ${media.lessThan("medium")`
            display: flex;
            flex-direction: column;
            width: 100%;
            height: calc(100vh - 80px);
            position: absolute;
            top: 80px;
            left: ${$isOpen ? 0 : "-100%"};
            opacity: 1;
            transition: all 0.3s ease-in-out;
            background: ${theme.colors.white};
            padding-top: ${theme.spacings.large};
        `}
    `}
`;

export const NavItem = styled.li`
    height: 80px;
    display: flex;
    align-items: center;

    ${media.lessThan("medium")`
        height: 60px;
    `}
`;

export const NavLinkStyled = styled(NavLink)`
    ${({ theme }) => css`
        color: ${theme.colors.textSecondary};
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0 ${theme.spacings.small};
        height: 100%;
        cursor: pointer;
        font-weight: ${theme.fonts.weight.medium};
        transition: all 0.2s ease-in-out;

        &:hover {
            color: ${theme.colors.primary};
        }

        &.active {
            color: ${theme.colors.primary};
            border-bottom: 3px solid ${theme.colors.primary};
        }

        ${media.lessThan("medium")`
            &.active {
                border-bottom: none;
                font-weight: ${theme.fonts.weight.bold};
            }
        `}
    `}
`;

export const NavSocial = styled.div<{ $isMobile: boolean }>`
    ${({ theme, $isMobile }) => css`
        display: ${$isMobile ? "none" : "flex"};
        align-items: center;
        gap: ${theme.spacings.small};

        ${media.lessThan("medium")`
            display: ${$isMobile ? "flex" : "none"};
            margin-top: ${theme.spacings.large};
        `}
    `}
`;

export const SocialIconLink = styled.a`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 2.4rem;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;
