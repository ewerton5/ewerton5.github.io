"use client";

import React from "react";

import * as S from "./styles";

type LangBadgeProps = {
    language: string;
    level: string;
};

const LangBadge: React.FC<LangBadgeProps> = ({ language, level }) => (
    <S.Badge>
        <strong>{language}:</strong> {level}
    </S.Badge>
);

export const LangBadgeList: React.FC<{ children: React.ReactNode }> = ({
    children
}) => <S.List>{children}</S.List>;

export default LangBadge;
