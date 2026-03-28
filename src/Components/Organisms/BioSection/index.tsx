"use client";

import React from "react";

import BioPanel from "Components/Molecules/BioPanel";

import * as S from "./styles";

const BioSection: React.FC = () => (
    <S.Section>
        <BioPanel>
            <p>
                Meu propósito é tornar a tecnologia mais acessível e simples
                para o mundo. Para isso, aplico toda a disciplina adquirida ao
                longo da minha trajetória acadêmica e profissional, aliando
                compromisso com a verdade, honestidade, justiça e lealdade.
            </p>
            <p>
                Minha jornada é um pouco diferente do convencional. Antes de
                mergulhar em linhas de código, tive a honra de ser{" "}
                <strong>Cadete Aviador na Força Aérea Brasileira (AFA)</strong>.
                Essa experiência militar forjou em mim uma liderança resiliente
                e a capacidade de tomar decisões sob pressão.
            </p>
            <p>
                Com mais de seis anos de experiência no desenvolvimento de
                aplicativos Android, iOS e sistemas web, busco constantemente
                soluções eficientes para os desafios que enfrento. Hoje, como{" "}
                <strong>Líder Técnico</strong>, utilizo minha capacidade de
                aprendizado rápido para guiar equipes, arquitetar soluções
                escaláveis e garantir que a tecnologia resolva problemas reais
                de forma clara, prática e humana.
            </p>
        </BioPanel>
    </S.Section>
);

export default BioSection;
