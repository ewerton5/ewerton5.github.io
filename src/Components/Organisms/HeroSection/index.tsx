"use client";

import { useRouter } from "next/navigation";
import React from "react";

import Button from "Components/Atoms/Button";
import HeroActions from "Components/Atoms/HeroActions";
import HeroImage from "Components/Atoms/HeroImage";
import HeroSubtitle from "Components/Atoms/HeroSubtitle";
import HeroTitle from "Components/Atoms/HeroTitle";
import profile from "data/profile.json";

import * as S from "./styles";

const HeroSection: React.FC = () => {
    const router = useRouter();
    const imageSrc =
        profile.profilePicture || "https://github.com/ewerton5.png";

    return (
        <S.Section>
            <S.Content>
                <HeroTitle />
                <HeroSubtitle name={profile.name} title={profile.title} />
                <HeroActions>
                    <Button
                        size="LARGE"
                        rounded
                        hierarchy="primary"
                        onClick={() => router.push("/portfolio")}
                    >
                        Ver Projetos
                    </Button>
                    <Button
                        size="LARGE"
                        rounded
                        hierarchy="secondary"
                        onClick={() => router.push("/contato")}
                    >
                        Entrar em Contato
                    </Button>
                </HeroActions>
            </S.Content>
            <HeroImage src={imageSrc} alt={profile.name} />
        </S.Section>
    );
};

export default HeroSection;
