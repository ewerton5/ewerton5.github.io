"use client";

import React from "react";

import * as S from "./styles";

type HeroSubtitleProps = {
    name: string;
    title: string;
};

const HeroSubtitle: React.FC<HeroSubtitleProps> = ({ name, title }) => (
    <S.Subtitle>
        Olá, eu sou <strong>{name}</strong>, {title}. Construo aplicações web e
        mobile de alta performance e lidero equipes de desenvolvimento focadas
        em resultados.
    </S.Subtitle>
);

export default HeroSubtitle;
