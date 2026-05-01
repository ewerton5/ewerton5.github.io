import type { ReactNode } from "react";

type BioPanelProps = {
    children: ReactNode;
};

export default function BioPanel({ children }: BioPanelProps) {
    return (
        <div className="bg-white p-large rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] [&_p]:text-medium [&_p]:leading-[1.8] [&_p]:text-text-secondary [&_p]:mb-medium [&_p:last-child]:mb-0 [&_strong]:text-primary">
            {children}
        </div>
    );
}
