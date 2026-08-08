import { notFound } from "next/navigation";
import { type ReactNode } from "react";

import { isValidLocale } from "utils/getDictionary";

export function generateStaticParams() {
    return [{ lang: "pt-BR" }, { lang: "en-US" }];
}

interface LangLayoutProps {
    children: ReactNode;
    params: Promise<{ lang: string }>;
}

export default async function LangLayout({
    children,
    params
}: LangLayoutProps) {
    const { lang } = await params;

    if (!isValidLocale(lang)) {
        notFound();
    }

    return <>{children}</>;
}
