"use client";

import React from "react";

import * as S from "./styles";

type HeroActionsProps = {
    children: React.ReactNode;
};

const HeroActions: React.FC<HeroActionsProps> = ({ children }) => (
    <S.Wrapper>{children}</S.Wrapper>
);

export default HeroActions;
