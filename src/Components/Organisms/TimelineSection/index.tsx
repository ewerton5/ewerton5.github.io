"use client";

import React from "react";

import TimelineCard from "Components/Molecules/TimelineCard";
import timelineData from "data/timeline.json";

import * as S from "./styles";

const TimelineSection: React.FC = () => (
    <S.Section>
        <h2>Minha Jornada</h2>
        {timelineData.map((item) => (
            <TimelineCard
                key={item.id}
                year={item.year}
                title={item.title}
                description={item.description}
            />
        ))}
    </S.Section>
);

export default TimelineSection;
