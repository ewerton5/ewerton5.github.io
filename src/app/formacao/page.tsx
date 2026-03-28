"use client";

import React from "react";

import AcademicFormationSection from "Components/Organisms/AcademicFormationSection";
import CertificationsFormationSection from "Components/Organisms/CertificationsFormationSection";
import LanguagesFormationSection from "Components/Organisms/LanguagesFormationSection";
import MainLayout from "Components/Templates/MainLayout";

import { Container, PageTitle } from "./styles";

const Graduation: React.FC = () => {
    return (
        <MainLayout>
            <Container>
                <PageTitle>Formação & Conhecimento</PageTitle>

                <AcademicFormationSection />
                <CertificationsFormationSection />
                <LanguagesFormationSection />
            </Container>
        </MainLayout>
    );
};

export default Graduation;
