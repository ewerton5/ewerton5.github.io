import type { ReactNode } from "react";

type HeroActionsProps = {
    children: ReactNode;
};

export default function HeroActions({ children }: HeroActionsProps) {
    return (
        <div className="flex gap-medium mt-large max-tablet:flex-col max-tablet:items-center max-tablet:[&_button]:w-full max-tablet:[&_button]:max-w-[300px]">
            {children}
        </div>
    );
}
