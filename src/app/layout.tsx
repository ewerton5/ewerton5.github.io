import type { Metadata } from "next";

import Providers from "./Providers";
import StyledComponentsRegistry from "./StyledComponentsRegistry";

export const metadata: Metadata = {
    title: "Ewerton Vieira",
    description: "Site Pessoal de Ewerton Vieira"
};

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="pt-br" suppressHydrationWarning>
            <head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#000000" />
                <link rel="apple-touch-icon" href="/logo192.png" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body suppressHydrationWarning>
                <StyledComponentsRegistry>
                    <Providers>{children}</Providers>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
};

export default RootLayout;
