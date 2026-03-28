"use client";

import React from "react";
import { FaCertificate } from "react-icons/fa";

import CertificationCard from "Components/Molecules/CertificationCard";
import EducationSectionHeader from "Components/Molecules/EducationSectionHeader";
import educationData from "data/education.json";

import * as S from "./styles";

const CertificationsFormationSection: React.FC = () => (
    <S.Section>
        <EducationSectionHeader
            icon={<FaCertificate />}
            title="Cursos & Certificações"
        />
        <S.Grid>
            {educationData.certifications.map((cert) => (
                <CertificationCard
                    key={cert.id}
                    title={cert.title}
                    platform={cert.platform}
                    year={cert.year}
                />
            ))}
        </S.Grid>
    </S.Section>
);

export default CertificationsFormationSection;
