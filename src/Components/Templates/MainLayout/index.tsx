import { type ReactNode } from "react";

import Footer from "Components/Organisms/Footer";
import Navbar from "Components/Organisms/Navbar";
import type { Profile } from "types/data";
import type { Dictionary, Locale } from "types/dictionary";

interface MainLayoutProps {
    children: ReactNode;
    lang: Locale;
    dict: Dictionary;
    profile: Profile;
}

export default function MainLayout({
    children,
    lang,
    dict,
    profile
}: MainLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar lang={lang} dict={dict} profile={profile} />
            <main className="flex-1 w-full max-w-[1120px] mx-auto py-large px-small">
                {children}
            </main>
            <Footer dict={dict} profile={profile} />
        </div>
    );
}
