"use client";

import React from "react";

import HeroSection from "Components/Organisms/HeroSection";
import ServicesSection from "Components/Organisms/ServicesSection";
import TestimonialsSection from "Components/Organisms/TestimonialsSection";
import MainLayout from "Components/Templates/MainLayout";

import { HomeContainer } from "./styles";

const Home: React.FC = () => {
    return (
        <MainLayout>
            <HomeContainer>
                <HeroSection />
                <ServicesSection />
                <TestimonialsSection />
            </HomeContainer>
        </MainLayout>
    );
};

export default Home;
