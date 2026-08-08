import type { ReactNode } from "react";
import { FaApple, FaLaptopCode, FaServer } from "react-icons/fa";

import SetupCard from "Components/Molecules/SetupCard";
import type { SetupItem } from "types/data";
import type { Dictionary } from "types/dictionary";

const iconMap: Record<string, ReactNode> = {
    apple: <FaApple size={40} />,
    server: <FaServer size={40} />,
    laptopCode: <FaLaptopCode size={40} />
};

type SetupSectionProps = {
    dict: Dictionary;
    setup: SetupItem[];
};

export default function SetupSection({ dict, setup }: SetupSectionProps) {
    return (
        <section className="mb-large">
            <h2 className="text-center mb-large">{dict.setup.title}</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-medium">
                {setup.map((item) => (
                    <SetupCard
                        key={item.id}
                        icon={iconMap[item.iconName]}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
}
