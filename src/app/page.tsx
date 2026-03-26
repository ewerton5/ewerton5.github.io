"use client";

import { useRouter } from "next/navigation";
import React from "react";
import {
    FaMobileAlt,
    FaLaptopCode,
    FaUsersCog,
    FaQuoteLeft
} from "react-icons/fa";

import Button from "Components/Atoms/Button";
import MainLayout from "Components/Templates/MainLayout";
import profile from "data/profile.json";
import services from "data/services.json";
import testimonials from "data/testimonials.json";

import {
    HomeContainer,
    HeroSection,
    HeroContent,
    HeroImage,
    HeroTitle,
    HeroSubtitle,
    HeroButtonWrapper,
    SectionTitle,
    ServicesSection,
    ServicesGrid,
    ServiceCard,
    ServiceIconWrapper,
    TestimonialsSection,
    TestimonialsGrid,
    TestimonialCard,
    TestimonialQuote,
    TestimonialAuthor,
    AuthorAvatar,
    AuthorInfo
} from "./styles";

const Home: React.FC = () => {
    const router = useRouter();

    const renderServiceIcon = (iconName: string) => {
        switch (iconName) {
            case "leadership":
                return <FaUsersCog size={32} />;
            case "mobile":
                return <FaMobileAlt size={32} />;
            case "web":
                return <FaLaptopCode size={32} />;
            default:
                return <FaLaptopCode size={32} />;
        }
    };

    return (
        <MainLayout>
            <HomeContainer>
                <HeroSection>
                    <HeroContent>
                        <HeroTitle>
                            Transformando disciplina militar em <br />
                            <span>excelência técnica.</span>
                        </HeroTitle>
                        <HeroSubtitle>
                            Olá, eu sou <strong>{profile.name}</strong>,{" "}
                            {profile.title}. Construo aplicações web e mobile de
                            alta performance e lidero equipes de desenvolvimento
                            focadas em resultados.
                        </HeroSubtitle>
                        <HeroButtonWrapper>
                            <Button
                                size="LARGE"
                                rounded
                                hierarchy="primary"
                                onClick={() => router.push("/portfolio")}
                            >
                                Ver Projetos
                            </Button>
                            <Button
                                size="LARGE"
                                rounded
                                hierarchy="secondary"
                                onClick={() => router.push("/contato")}
                            >
                                Entrar em Contato
                            </Button>
                        </HeroButtonWrapper>
                    </HeroContent>
                    <HeroImage
                        src={
                            profile.profilePicture ||
                            "https://github.com/ewerton5.png"
                        }
                        alt={profile.name}
                    />
                </HeroSection>

                <ServicesSection>
                    <SectionTitle>Minhas Especialidades</SectionTitle>
                    <ServicesGrid>
                        {services.map((service) => (
                            <ServiceCard key={service.id}>
                                <ServiceIconWrapper>
                                    {renderServiceIcon(service.icon)}
                                </ServiceIconWrapper>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </ServiceCard>
                        ))}
                    </ServicesGrid>
                </ServicesSection>

                <TestimonialsSection>
                    <SectionTitle>O que dizem sobre mim</SectionTitle>
                    <TestimonialsGrid>
                        {testimonials.map((testimonial) => (
                            <TestimonialCard key={testimonial.id}>
                                <FaQuoteLeft className="quote-icon" />
                                <TestimonialQuote>
                                    {`"${testimonial.text}"`}
                                </TestimonialQuote>
                                <TestimonialAuthor>
                                    <AuthorAvatar
                                        src={testimonial.avatarUrl}
                                        alt={testimonial.name}
                                    />
                                    <AuthorInfo>
                                        <h4>{testimonial.name}</h4>
                                        <span>{testimonial.role}</span>
                                    </AuthorInfo>
                                </TestimonialAuthor>
                            </TestimonialCard>
                        ))}
                    </TestimonialsGrid>
                </TestimonialsSection>
            </HomeContainer>
        </MainLayout>
    );
};

export default Home;
