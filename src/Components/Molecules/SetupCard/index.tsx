"use client";

import React from "react";

import * as S from "./styles";

type SetupCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

const SetupCard: React.FC<SetupCardProps> = ({ icon, title, description }) => (
    <S.Card>
        {icon}
        <h3>{title}</h3>
        <p>{description}</p>
    </S.Card>
);

export default SetupCard;
