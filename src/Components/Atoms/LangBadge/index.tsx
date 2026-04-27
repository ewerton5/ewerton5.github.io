import type { ReactNode } from "react";

type LangBadgeProps = {
    language: string;
    level: string;
};

const LangBadge = ({ language, level }: LangBadgeProps) => (
    <div className="bg-gray-50 border border-gray-200 px-medium py-small rounded-[50px] text-small text-text [&_strong]:text-secondary">
        <strong>{language}:</strong> {level}
    </div>
);

type LangBadgeListProps = {
    children: ReactNode;
};

export const LangBadgeList = ({ children }: LangBadgeListProps) => (
    <div className="flex flex-wrap gap-medium max-tablet:flex-col">
        {children}
    </div>
);

export default LangBadge;
