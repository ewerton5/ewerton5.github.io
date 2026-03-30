import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeMode = "system" | "light" | "dark";
export type ResolvedTheme = "light" | "dark";

interface ThemeStoreState {
    mode: ThemeMode;
    resolvedTheme: ResolvedTheme;
    setResolvedTheme: (theme: ResolvedTheme) => void;
    toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStoreState>()(
    persist(
        (set, get) => ({
            mode: "system",
            resolvedTheme: "light",
            setResolvedTheme: (resolvedTheme) => set({ resolvedTheme }),
            toggleTheme: () => {
                const { resolvedTheme } = get();
                set({ mode: resolvedTheme === "dark" ? "light" : "dark" });
            }
        }),
        {
            name: "theme-preference"
        }
    )
);
