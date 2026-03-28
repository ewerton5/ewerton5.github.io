"use client";

import React from "react";
import { FaUniversity } from "react-icons/fa";

import AcademicCard from "Components/Molecules/AcademicCard";
import EducationSectionHeader from "Components/Molecules/EducationSectionHeader";
import educationData from "data/education.json";

import * as S from "./styles";

const AcademicFormationSection: React.FC = () => (
    <S.Section>
        <EducationSectionHeader
            icon={<FaUniversity />}
            title="Formação Acadêmica"
        />
        <S.Grid>
            {educationData.academic.map((item) => (
                <AcademicCard
                    key={item.id}
                    degree={item.degree}
                    institution={item.institution}
                    period={item.period}
                    description={item.description}
                />
            ))}
        </S.Grid>
    </S.Section>
);

export default AcademicFormationSection;
