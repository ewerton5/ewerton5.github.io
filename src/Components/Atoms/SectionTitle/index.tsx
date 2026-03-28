"use client";

import React from "react";

import * as S from "./styles";

type SectionTitleProps = {
    children: React.ReactNode;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
    <S.Title>{children}</S.Title>
);

export default SectionTitle;
