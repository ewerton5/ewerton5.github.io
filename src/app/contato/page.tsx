"use client";

import React from "react";

import ContactConversationSection from "Components/Organisms/ContactConversationSection";
import SocialNetworksSection from "Components/Organisms/SocialNetworksSection";
import MainLayout from "Components/Templates/MainLayout";

import { Container } from "./styles";

const Contact: React.FC = () => {
    return (
        <MainLayout>
            <Container>
                <ContactConversationSection />
                <SocialNetworksSection />
            </Container>
        </MainLayout>
    );
};

export default Contact;
