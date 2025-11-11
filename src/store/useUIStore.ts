import { create } from "zustand";

interface UIStoreProps {
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
    closeMobileMenu: () => void;
}

export const useUIStore = create<UIStoreProps>((set) => ({
    isMobileMenuOpen: false,
    toggleMobileMenu: () =>
        set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
    closeMobileMenu: () => set({ isMobileMenuOpen: false })
}));
