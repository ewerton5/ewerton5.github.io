"use client";

import React from "react";
import { FaUniversity, FaCertificate, FaGlobe } from "react-icons/fa";

import MainLayout from "Components/Templates/MainLayout";
import educationData from "data/education.json";

import {
    Container,
    PageTitle,
    SectionWrapper,
    SectionHeader,
    AcademicGrid,
    AcademicCard,
    CertificationsGrid,
    CertCard,
    LanguagesFlex,
    LangBadge
} from "./styles";

const Graduation: React.FC = () => {
    return (
        <MainLayout>
            <Container>
                <PageTitle>Formação & Conhecimento</PageTitle>

                {/* --- Formação Acadêmica --- */}
                <SectionWrapper>
                    <SectionHeader>
                        <FaUniversity />
                        <h2>Formação Acadêmica</h2>
                    </SectionHeader>
                    <AcademicGrid>
                        {educationData.academic.map((item) => (
                            <AcademicCard key={item.id}>
                                <h3>{item.degree}</h3>
                                <h4>{item.institution}</h4>
                                <span>{item.period}</span>
                                <p>{item.description}</p>
                            </AcademicCard>
                        ))}
                    </AcademicGrid>
                </SectionWrapper>

                {/* --- Certificações --- */}
                <SectionWrapper>
                    <SectionHeader>
                        <FaCertificate />
                        <h2>Cursos & Certificações</h2>
                    </SectionHeader>
                    <CertificationsGrid>
                        {educationData.certifications.map((cert) => (
                            <CertCard key={cert.id}>
                                <h4>{cert.title}</h4>
                                <p>{cert.platform}</p>
                                <span>{cert.year}</span>
                            </CertCard>
                        ))}
                    </CertificationsGrid>
                </SectionWrapper>

                {/* --- Idiomas --- */}
                <SectionWrapper>
                    <SectionHeader>
                        <FaGlobe />
                        <h2>Idiomas</h2>
                    </SectionHeader>
                    <LanguagesFlex>
                        {educationData.languages.map((lang) => (
                            <LangBadge key={lang.id}>
                                <strong>{lang.language}:</strong> {lang.level}
                            </LangBadge>
                        ))}
                    </LanguagesFlex>
                </SectionWrapper>
            </Container>
        </MainLayout>
    );
};

export default Graduation;
