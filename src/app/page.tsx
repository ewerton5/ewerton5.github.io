"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { resolvePreferredLocale } from "utils/resolvePreferredLocale";

export default function RootPage() {
    const router = useRouter();

    useEffect(() => {
        const locale = resolvePreferredLocale();

        router.replace(`/${locale}`);
    }, [router]);

    return <div className="min-h-screen bg-background" />;
}
