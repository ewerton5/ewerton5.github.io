"use client";

import React from "react";

import * as S from "./styles";

type TimelineCardProps = {
    year: string;
    title: string;
    description: string;
};

const TimelineCard: React.FC<TimelineCardProps> = ({
    year,
    title,
    description
}) => (
    <S.Row>
        <S.Year>{year}</S.Year>
        <S.Body>
            <h3>{title}</h3>
            <p>{description}</p>
        </S.Body>
    </S.Row>
);

export default TimelineCard;
