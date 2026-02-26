import React from "react";
import { FaLaptopCode, FaServer, FaApple } from "react-icons/fa";

import MainLayout from "Components/Templates/MainLayout";
import timelineData from "data/timeline.json";

import {
    AboutContainer,
    PageTitle,
    BioSection,
    BioText,
    TimelineSection,
    TimelineItem,
    TimelineYear,
    TimelineContent,
    SetupSection,
    SetupGrid,
    SetupCard
} from "./styles";

const About: React.FC = () => {
    return (
        <MainLayout>
            <AboutContainer>
                <PageTitle>Sobre Mim</PageTitle>

                {/* Seção 1: Auto Biografia */}
                <BioSection>
                    <BioText>
                        <p>
                            Meu propósito é tornar a tecnologia mais acessível e
                            simples para o mundo. Para isso, aplico toda a
                            disciplina adquirida ao longo da minha trajetória
                            acadêmica e profissional, aliando compromisso com a
                            verdade, honestidade, justiça e lealdade.
                        </p>
                        <p>
                            Minha jornada é um pouco diferente do convencional.
                            Antes de mergulhar em linhas de código, tive a honra
                            de ser{" "}
                            <strong>
                                Cadete Aviador na Força Aérea Brasileira (AFA)
                            </strong>
                            . Essa experiência militar forjou em mim uma
                            liderança resiliente e a capacidade de tomar
                            decisões sob pressão.
                        </p>
                        <p>
                            Com mais de seis anos de experiência no
                            desenvolvimento de aplicativos Android, iOS e
                            sistemas web, busco constantemente soluções
                            eficientes para os desafios que enfrento. Hoje, como{" "}
                            <strong>Líder Técnico</strong>, utilizo minha
                            capacidade de aprendizado rápido para guiar equipes,
                            arquitetar soluções escaláveis e garantir que a
                            tecnologia resolva problemas reais de forma clara,
                            prática e humana.
                        </p>
                    </BioText>
                </BioSection>

                {/* Seção 2: Minha Jornada (Timeline) */}
                <TimelineSection>
                    <h2>Minha Jornada</h2>
                    {timelineData.map((item) => (
                        <TimelineItem key={item.id}>
                            <TimelineYear>{item.year}</TimelineYear>
                            <TimelineContent>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </TimelineSection>

                {/* Seção 3: Meu Setup */}
                <SetupSection>
                    <h2>Meu Setup & Ferramentas</h2>
                    <SetupGrid>
                        <SetupCard>
                            <FaApple size={40} />
                            <h3>Hardware Principal</h3>
                            <p>
                                MacBook Pro (Apple Silicon) para mobilidade e
                                Mac Mini M2 para estação de trabalho primária.
                            </p>
                        </SetupCard>
                        <SetupCard>
                            <FaServer size={40} />
                            <h3>Laboratório / Hackintosh</h3>
                            <p>
                                Máquina customizada rodando macOS para testes
                                pesados, builds paralelos e experimentações de
                                arquitetura.
                            </p>
                        </SetupCard>
                        <SetupCard>
                            <FaLaptopCode size={40} />
                            <h3>Software Stack</h3>
                            <p>
                                VS Code, Xcode, Android Studio. Insomnia para
                                APIs, Figma para UI/UX e terminal zsh com Oh My
                                Zsh.
                            </p>
                        </SetupCard>
                    </SetupGrid>
                </SetupSection>
            </AboutContainer>
        </MainLayout>
    );
};

export default About;
