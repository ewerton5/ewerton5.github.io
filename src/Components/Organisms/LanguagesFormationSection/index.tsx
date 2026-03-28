"use client";

import React from "react";
import { FaGlobe } from "react-icons/fa";

import LangBadge, { LangBadgeList } from "Components/Atoms/LangBadge";
import EducationSectionHeader from "Components/Molecules/EducationSectionHeader";
import educationData from "data/education.json";

import * as S from "./styles";

const LanguagesFormationSection: React.FC = () => (
    <S.Section>
        <EducationSectionHeader icon={<FaGlobe />} title="Idiomas" />
        <LangBadgeList>
            {educationData.languages.map((lang) => (
                <LangBadge
                    key={lang.id}
                    language={lang.language}
                    level={lang.level}
                />
            ))}
        </LangBadgeList>
    </S.Section>
);

export default LanguagesFormationSection;
