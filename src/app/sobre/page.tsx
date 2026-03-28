"use client";

import React from "react";

import BioSection from "Components/Organisms/BioSection";
import SetupSection from "Components/Organisms/SetupSection";
import TimelineSection from "Components/Organisms/TimelineSection";
import MainLayout from "Components/Templates/MainLayout";

import { AboutContainer, PageTitle } from "./styles";

const About: React.FC = () => {
    return (
        <MainLayout>
            <AboutContainer>
                <PageTitle>Sobre Mim</PageTitle>

                <BioSection />
                <TimelineSection />
                <SetupSection />
            </AboutContainer>
        </MainLayout>
    );
};

export default About;
