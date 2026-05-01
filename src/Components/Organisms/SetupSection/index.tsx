import type { ReactNode } from "react";
import { FaApple, FaLaptopCode, FaServer } from "react-icons/fa";

import SetupCard from "Components/Molecules/SetupCard";
import setup from "data/setup.json";

const iconMap: Record<string, ReactNode> = {
    apple: <FaApple size={40} />,
    server: <FaServer size={40} />,
    laptopCode: <FaLaptopCode size={40} />
};

export default function SetupSection() {
    return (
        <section className="mb-large">
            <h2 className="text-center mb-large">Meu Setup & Ferramentas</h2>
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
