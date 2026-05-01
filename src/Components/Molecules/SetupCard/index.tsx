import type { ReactNode } from "react";

type SetupCardProps = {
    icon: ReactNode;
    title: string;
    description: string;
};

const cardClasses =
    "bg-white p-large rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-center transition-all duration-300 ease-in-out hover:-translate-y-[5px]";

export default function SetupCard({
    icon,
    title,
    description
}: SetupCardProps) {
    return (
        <div className={cardClasses}>
            <div className="flex justify-center text-primary mb-small">
                {icon}
            </div>
            <h3 className="mb-small text-secondary">{title}</h3>
            <p className="text-text-secondary leading-[1.5] text-small">
                {description}
            </p>
        </div>
    );
}
