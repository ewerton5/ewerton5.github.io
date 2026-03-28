"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import SocialButton from "Components/Atoms/SocialButton";

import * as S from "./styles";

const SocialNetworksSection: React.FC = () => (
    <S.Section>
        <h2>Minhas Redes</h2>
        <S.Links>
            <SocialButton
                href="https://www.linkedin.com/in/ewerton-vieira-ab8b111ab"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin size={24} />
                LinkedIn
            </SocialButton>
            <SocialButton
                href="https://github.com/ewerton5"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub size={24} />
                GitHub
            </SocialButton>
        </S.Links>
    </S.Section>
);

export default SocialNetworksSection;
