import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { type ReactNode } from "react";

import { baseUrl } from "constants/url";

import Providers from "./Providers";

import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
    variable: "--font-inter"
});

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: "Ewerton Vieira",
    description: "Software Engineer & Tech Lead",
    icons: {
        icon: "/favicon.ico",
        apple: "/logo192.png"
    },
    manifest: "/manifest.json"
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#0a74da"
};

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="pt-br" className={inter.variable} suppressHydrationWarning>
            <body className={inter.className} suppressHydrationWarning>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
