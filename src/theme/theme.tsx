"use client";

import React, { ReactNode, useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";

import { ResolvedTheme, useThemeStore } from "store";

const baseTheme = {
    fonts: {
        family: {
            primary: "'Inter', sans-serif"
        },
        weight: {
            regular: 400,
            medium: 500,
            bold: 700
        },
        size: {
            xxsmall: "1.2rem",
            xsmall: "1.4rem",
            small: "1.6rem",
            medium: "1.8rem",
            large: "2.4rem",
            xlarge: "3.2rem",
            xxlarge: "4.0rem"
        }
    },
    spacings: {
        xxsmall: "0.4rem",
        xsmall: "0.8rem",
        small: "1.6rem",
        medium: "2.4rem",
        large: "3.2rem",
        xlarge: "4.0rem",
        xxlarge: "4.8rem"
    },
    breakpoints: {
        mobileS: "320px",
        mobileM: "375px",
        mobileL: "425px",
        tablet: "768px",
        laptop: "1024px",
        laptopL: "1440px",
        desktop: "2560px"
    }
};

const lightColors = {
    colors: {
        primary: "#0A74DA",
        secondary: "#003F73",
        background: "#F4F7FA",
        white: "#FFFFFF",
        cardBackground: "#FFFFFF",
        text: "#333333",
        textSecondary: "#555555",
        gray: {
            50: "#F9FAFB",
            100: "#F3F4F6",
            200: "#E5E7EB",
            300: "#D1D5DB",
            400: "#9CA3AF",
            500: "#6B7280",
            600: "#4B5563",
            700: "#374151",
            800: "#1F2937",
            900: "#111827"
        },
        danger: "#E11D48",
        success: "#16A34A",
        warning: "#F59E0B"
    }
};

const darkColors = {
    colors: {
        primary: "#5EA9FF",
        secondary: "#E5EEFF",
        background: "#0F172A",
        white: "#111827",
        cardBackground: "#1F2937",
        text: "#E5E7EB",
        textSecondary: "#9CA3AF",
        gray: {
            50: "#111827",
            100: "#0B1220",
            200: "#243041",
            300: "#334155",
            400: "#475569",
            500: "#6B7280",
            600: "#94A3B8",
            700: "#C7D2FE",
            800: "#E0E7FF",
            900: "#F8FAFC"
        },
        danger: "#FB7185",
        success: "#4ADE80",
        warning: "#FBBF24"
    }
};

const lightTheme = {
    ...baseTheme,
    ...lightColors
};

const darkTheme = {
    ...baseTheme,
    ...darkColors
};

const themeByMode: Record<ResolvedTheme, typeof lightTheme> = {
    light: lightTheme,
    dark: darkTheme
};

type ThemeProps = {
    children: ReactNode;
};

const Theme: React.FC<ThemeProps> = ({ children }) => {
    const { mode, resolvedTheme, setResolvedTheme } = useThemeStore();
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        const hasHydrated = useThemeStore.persist.hasHydrated();

        if (hasHydrated) {
            setIsHydrated(true);
            return;
        }

        const unsubscribe = useThemeStore.persist.onFinishHydration(() => {
            setIsHydrated(true);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!isHydrated || typeof window === "undefined") return;

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const applyTheme = (prefersDark: boolean) => {
            const nextTheme =
                mode === "system" ? (prefersDark ? "dark" : "light") : mode;
            setResolvedTheme(nextTheme);
        };

        applyTheme(mediaQuery.matches);

        const handleChange = (event: MediaQueryListEvent) => {
            applyTheme(event.matches);
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [isHydrated, mode, setResolvedTheme]);

    useEffect(() => {
        if (!isHydrated || typeof document === "undefined") return;
        document.documentElement.setAttribute("data-theme", resolvedTheme);
    }, [isHydrated, resolvedTheme]);

    const selectedTheme = useMemo(
        () => themeByMode[resolvedTheme] ?? lightTheme,
        [resolvedTheme]
    );

    if (!isHydrated) return null;

    return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};

export { Theme, lightTheme as theme };
