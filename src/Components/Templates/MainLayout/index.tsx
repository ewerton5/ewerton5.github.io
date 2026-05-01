import { type ReactNode } from "react";

import Footer from "Components/Organisms/Footer";
import Navbar from "Components/Organisms/Navbar";

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 w-full max-w-[1120px] mx-auto py-large px-small">
                {children}
            </main>
            <Footer />
        </div>
    );
}
