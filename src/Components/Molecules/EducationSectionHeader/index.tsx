"use client";

import React from "react";

import * as S from "./styles";

type EducationSectionHeaderProps = {
    icon: React.ReactNode;
    title: string;
};

const EducationSectionHeader: React.FC<EducationSectionHeaderProps> = ({
    icon,
    title
}) => (
    <S.Header>
        {icon}
        <h2>{title}</h2>
    </S.Header>
);

export default EducationSectionHeader;
