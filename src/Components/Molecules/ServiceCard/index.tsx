import type { ReactNode } from "react";

type ServiceCardProps = {
    icon: ReactNode;
    title: string;
    description: string;
};

const cardClasses =
    "w-full flex flex-col bg-white rounded-2xl p-large shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(10,116,218,0.1)]";

export default function ServiceCard({
    icon,
    title,
    description
}: ServiceCardProps) {
    return (
        <div className={cardClasses}>
            <div
                className="w-16 h-16 rounded-2xl flex shrink-0 items-center justify-center text-primary mb-medium"
                style={{
                    background:
                        "color-mix(in srgb, var(--ui-primary) 8%, transparent)"
                }}
            >
                {icon}
            </div>
            <h3 className="mb-small text-medium">{title}</h3>
            <p className="text-text-secondary leading-relaxed">{description}</p>
        </div>
    );
}
