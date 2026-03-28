"use client";

import React from "react";

import * as S from "./styles";

type ServiceCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
    icon,
    title,
    description
}) => (
    <S.Card>
        <S.IconWrapper>{icon}</S.IconWrapper>
        <h3>{title}</h3>
        <p>{description}</p>
    </S.Card>
);

export default ServiceCard;
