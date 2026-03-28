"use client";

import React from "react";

import * as S from "./styles";

type CertificationCardProps = {
    title: string;
    platform: string;
    year: string;
};

const CertificationCard: React.FC<CertificationCardProps> = ({
    title,
    platform,
    year
}) => (
    <S.Card>
        <h4>{title}</h4>
        <p>{platform}</p>
        <span>{year}</span>
    </S.Card>
);

export default CertificationCard;
