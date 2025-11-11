import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

// Paleta de cores profissional sugerida
const theme = {
    colors: {
        primary: "#0A74DA", // Azul principal (confiança, profissionalismo)
        secondary: "#003F73", // Azul escuro (para texto, cabeçalhos)
        background: "#F4F7FA", // Fundo claro (clean)
        white: "#FFFFFF",
        cardBackground: "#FFFFFF",
        text: "#333333", // Texto principal
        textSecondary: "#555555", // Texto secundário
        gray: {
            "50": "#F9FAFB",
            "100": "#F3F4F6",
            "200": "#E5E7EB",
            "300": "#D1D5DB",
            "400": "#9CA3AF",
            "500": "#6B7280",
            "600": "#4B5563",
            "700": "#374151",
            "800": "#1F2937",
            "900": "#111827"
        },
        danger: "#E11D48",
        success: "#16A34A",
        warning: "#F59E0B"
    },
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

type ThemeProps = {
    children: ReactNode;
};

const Theme: React.FC<ThemeProps> = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export { Theme, theme };
