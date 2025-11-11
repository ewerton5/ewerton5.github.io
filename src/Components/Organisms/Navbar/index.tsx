import React from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

import Logo from "Components/Atoms/Logo";
import profile from "data/profile.json";
import { useUIStore } from "store";

import {
    Nav,
    NavContainer,
    NavLogoContainer,
    NavMenu,
    NavItem,
    NavLinkStyled,
    NavSocial,
    MobileIcon,
    SocialIconLink
} from "./styles";

const Navbar: React.FC = () => {
    const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
        useUIStore();

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/sobre", label: "Sobre Mim" },
        { to: "/portfolio", label: "Portfólio" },
        { to: "/formacao", label: "Formação" },
        { to: "/contato", label: "Contato" }
    ];

    const handleLinkClick = () => {
        if (isMobileMenuOpen) {
            closeMobileMenu();
        }
    };

    return (
        <Nav>
            <NavContainer>
                <NavLogoContainer to="/" onClick={handleLinkClick}>
                    <Logo />
                    <span>Ewerton Vieira</span>
                </NavLogoContainer>

                <MobileIcon onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </MobileIcon>

                <NavMenu $isOpen={isMobileMenuOpen}>
                    {navLinks.map((link) => (
                        <NavItem key={link.to}>
                            <NavLinkStyled
                                to={link.to}
                                // NavLink da v6 usa className como função
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                                onClick={handleLinkClick}
                            >
                                {link.label}
                            </NavLinkStyled>
                        </NavItem>
                    ))}
                    <NavSocial $isMobile>
                        <SocialIconLink
                            href={profile.githubUrl}
                            target="_blank"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </SocialIconLink>
                        <SocialIconLink
                            href={profile.linkedinUrl}
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </SocialIconLink>
                    </NavSocial>
                </NavMenu>

                <NavSocial $isMobile={false}>
                    <SocialIconLink
                        href={profile.githubUrl}
                        target="_blank"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </SocialIconLink>
                    <SocialIconLink
                        href={profile.linkedinUrl}
                        target="_blank"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </SocialIconLink>
                </NavSocial>
            </NavContainer>
        </Nav>
    );
};

export default Navbar;
