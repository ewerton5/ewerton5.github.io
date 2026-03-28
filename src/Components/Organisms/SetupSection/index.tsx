"use client";

import React from "react";
import { FaLaptopCode, FaServer, FaApple } from "react-icons/fa";

import SetupCard from "Components/Molecules/SetupCard";

import * as S from "./styles";

const SetupSection: React.FC = () => (
    <S.Section>
        <h2>Meu Setup & Ferramentas</h2>
        <S.Grid>
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
        </S.Grid>
    </S.Section>
);

export default SetupSection;
