import { FaLaptopCode, FaServer, FaApple } from "react-icons/fa";

import SetupCard from "Components/Molecules/SetupCard";

const SetupSection = () => (
    <section className="mb-large">
        <h2 className="text-center mb-large">Meu Setup & Ferramentas</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-medium">
            <SetupCard
                icon={<FaApple size={40} />}
                title="Hardware Principal"
                description="MacBook Pro (Apple Silicon) para mobilidade e Mac Mini M2 para estação de trabalho primária."
            />
            <SetupCard
                icon={<FaServer size={40} />}
                title="Laboratório / Hackintosh"
                description="Máquina customizada rodando macOS para testes pesados, builds paralelos e experimentações de arquitetura."
            />
            <SetupCard
                icon={<FaLaptopCode size={40} />}
                title="Software Stack"
                description="VS Code, Xcode, Android Studio. Insomnia para APIs, Figma para UI/UX e terminal zsh com Oh My Zsh."
            />
        </div>
    </section>
);

export default SetupSection;
