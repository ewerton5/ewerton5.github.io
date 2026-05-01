import type { ReactNode } from "react";

type LangBadgeProps = {
    language: string;
    level: string;
};

export default function LangBadge({ language, level }: LangBadgeProps) {
    return (
        <div className="bg-gray-50 border border-gray-200 px-medium py-small rounded-[50px] text-small text-text [&_strong]:text-secondary">
            <strong>{language}:</strong> {level}
        </div>
    );
}

type LangBadgeListProps = {
    children: ReactNode;
};

export function LangBadgeList({ children }: LangBadgeListProps) {
    return (
        <div className="flex flex-wrap gap-medium max-tablet:flex-col">
            {children}
        </div>
    );
}
