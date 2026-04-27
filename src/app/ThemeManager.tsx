"use client";

import { type ReactNode, useEffect, useState } from "react";

import { useThemeStore } from "store";

interface ThemeManagerProps {
    children: ReactNode;
}

const ThemeManager = ({ children }: ThemeManagerProps) => {
    const { mode, resolvedTheme, setResolvedTheme } = useThemeStore();
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        const hasHydrated = useThemeStore.persist.hasHydrated();
        if (hasHydrated) {
            setIsHydrated(true);
            return;
        }
        const unsubscribe = useThemeStore.persist.onFinishHydration(() =>
            setIsHydrated(true)
        );
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

        const handleChange = (event: MediaQueryListEvent) =>
            applyTheme(event.matches);
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, [isHydrated, mode, setResolvedTheme]);

    useEffect(() => {
        if (!isHydrated || typeof document === "undefined") return;
        if (resolvedTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isHydrated, resolvedTheme]);

    return (
        <div
            style={{
                visibility: isHydrated ? "visible" : "hidden",
                width: "100%",
                height: "100%"
            }}
        >
            {children}
        </div>
    );
};

export default ThemeManager;
