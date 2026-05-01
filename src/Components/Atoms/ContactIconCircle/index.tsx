import type { ReactNode } from "react";

type ContactIconCircleProps = {
    color: string;
    children: ReactNode;
};

export default function ContactIconCircle({
    color,
    children
}: ContactIconCircleProps) {
    return (
        <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-[32px] mb-medium"
            style={{ background: `${color}15`, color }}
        >
            {children}
        </div>
    );
}
