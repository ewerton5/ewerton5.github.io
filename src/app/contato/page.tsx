"use client";

import React from "react";
import {
    FaEnvelope,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaLinkedin,
    FaGithub
} from "react-icons/fa";

import MainLayout from "Components/Templates/MainLayout";

import {
    Container,
    PageTitle,
    ContactText,
    ContactGrid,
    ContactCard,
    IconWrapper,
    CardContent,
    SocialSection,
    SocialLinks,
    SocialButton
} from "./styles";

const Contact: React.FC = () => {
    const whatsappMessage = encodeURIComponent(
        "Olá Ewerton, vi seu portfólio e gostaria de conversar!"
    );

    return (
        <MainLayout>
            <Container>
                <PageTitle>Vamos Conversar?</PageTitle>
                <ContactText>
                    Estou sempre aberto a discutir novos projetos, desafios
                    arquiteturais ou oportunidades de liderança e
                    desenvolvimento. Sinta-se à vontade para entrar em contato
                    através de um dos canais abaixo.
                </ContactText>

                <ContactGrid>
                    {/* Card do WhatsApp */}
                    <ContactCard
                        href={`https://wa.me/5521998910884?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IconWrapper $color="#25D366">
                            <FaWhatsapp />
                        </IconWrapper>
                        <CardContent>
                            <h3>WhatsApp</h3>
                            <p>+55 21 99891-0884</p>
                            <span>Me chame para um papo rápido</span>
                        </CardContent>
                    </ContactCard>

                    {/* Card de E-mail */}
                    <ContactCard href="mailto:ewerton.v50@gmail.com">
                        <IconWrapper $color="#EA4335">
                            <FaEnvelope />
                        </IconWrapper>
                        <CardContent>
                            <h3>E-mail</h3>
                            <p>ewerton.v50@gmail.com</p>
                            <span>Para assuntos mais formais</span>
                        </CardContent>
                    </ContactCard>

                    {/* Card de Localização (As "div" pois não é clicável) */}
                    <ContactCard as="div" style={{ cursor: "default" }}>
                        <IconWrapper $color="#0A74DA">
                            <FaMapMarkerAlt />
                        </IconWrapper>
                        <CardContent>
                            <h3>Localização</h3>
                            <p>Belford Roxo - RJ, Brasil</p>
                            <span>Disponível para atuação Remota</span>
                        </CardContent>
                    </ContactCard>
                </ContactGrid>

                {/* Redes Sociais */}
                <SocialSection>
                    <h2>Minhas Redes</h2>
                    <SocialLinks>
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
                    </SocialLinks>
                </SocialSection>
            </Container>
        </MainLayout>
    );
};

export default Contact;
