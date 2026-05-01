"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaMoon,
    FaSun
} from "react-icons/fa";

import Logo from "Components/Atoms/Logo";
import profile from "data/profile.json";
import { useThemeStore, useUIStore } from "store";
import { cn } from "utils/cn";

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/sobre", label: "Sobre Mim" },
    { to: "/portfolio", label: "Portfólio" },
    { to: "/formacao", label: "Formação" },
    { to: "/contato", label: "Contato" }
];

export default function Navbar() {
    const pathname = usePathname();
    const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } =
        useUIStore();
    const { resolvedTheme, toggleTheme } = useThemeStore();

    const handleLinkClick = () => {
        if (isMobileMenuOpen) closeMobileMenu();
    };

    const socialIcons = (
        <>
            <button
                type="button"
                onClick={toggleTheme}
                aria-label="Alternar tema"
                title="Alternar tema"
                className="text-secondary text-[1.5rem] inline-flex items-center justify-center transition-colors duration-200 hover:text-primary"
            >
                {resolvedTheme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
            <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-secondary text-[1.5rem] transition-colors duration-200 hover:text-primary"
            >
                <FaGithub />
            </a>
            <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-secondary text-[1.5rem] transition-colors duration-200 hover:text-primary"
            >
                <FaLinkedin />
            </a>
        </>
    );

    return (
        <nav className="bg-white h-20 flex justify-center items-center text-small sticky top-0 z-10 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center h-20 w-full max-w-[1120px] px-small">
                <Link
                    href="/"
                    onClick={handleLinkClick}
                    className="flex items-center gap-xsmall text-secondary text-medium font-bold no-underline [&_img]:h-10"
                >
                    <Logo />
                    <span>Ewerton Vieira</span>
                </Link>

                <div
                    role="button"
                    aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                    onClick={toggleMobileMenu}
                    className="hidden max-tablet:block text-[1.8rem] text-secondary cursor-pointer"
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul
                    className={cn(
                        "flex items-center list-none text-center",
                        "max-tablet:flex-col max-tablet:w-full max-tablet:h-[calc(100vh-80px)]",
                        "max-tablet:absolute max-tablet:top-20",
                        "max-tablet:transition-all max-tablet:duration-300 max-tablet:ease-in-out",
                        "max-tablet:bg-white max-tablet:pt-large",
                        isMobileMenuOpen
                            ? "max-tablet:left-0"
                            : "max-tablet:-left-full"
                    )}
                >
                    {navLinks.map((link) => (
                        <li
                            key={link.to}
                            className="h-20 flex items-center max-tablet:h-[60px]"
                        >
                            <Link
                                href={link.to}
                                onClick={handleLinkClick}
                                className={cn(
                                    "flex items-center no-underline px-small h-full cursor-pointer font-medium",
                                    "transition-all duration-200 ease-in-out hover:text-primary",
                                    pathname === link.to
                                        ? "text-primary border-b-[3px] border-primary max-tablet:border-b-0 max-tablet:font-bold"
                                        : "text-text-secondary"
                                )}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}

                    <div className="hidden items-center gap-small max-tablet:flex max-tablet:mt-large">
                        {socialIcons}
                    </div>
                </ul>

                <div className="flex items-center gap-small max-tablet:hidden">
                    {socialIcons}
                </div>
            </div>
        </nav>
    );
}
