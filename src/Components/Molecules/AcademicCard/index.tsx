"use client";

import React from "react";

import * as S from "./styles";

type AcademicCardProps = {
    degree: string;
    institution: string;
    period: string;
    description: string;
};

const AcademicCard: React.FC<AcademicCardProps> = ({
    degree,
    institution,
    period,
    description
}) => (
    <S.Card>
        <h3>{degree}</h3>
        <h4>{institution}</h4>
        <span>{period}</span>
        <p>{description}</p>
    </S.Card>
);

export default AcademicCard;
