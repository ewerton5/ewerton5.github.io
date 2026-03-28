"use client";

import React from "react";
import { FaMobileAlt, FaLaptopCode, FaUsersCog } from "react-icons/fa";

import SectionTitle from "Components/Atoms/SectionTitle";
import ServiceCard from "Components/Molecules/ServiceCard";
import services from "data/services.json";

import * as S from "./styles";

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

const ServicesSection: React.FC = () => (
    <S.Section>
        <SectionTitle>Minhas Especialidades</SectionTitle>
        <S.Grid>
            {services.map((service) => (
                <ServiceCard
                    key={service.id}
                    icon={renderServiceIcon(service.icon)}
                    title={service.title}
                    description={service.description}
                />
            ))}
        </S.Grid>
    </S.Section>
);

export default ServicesSection;
