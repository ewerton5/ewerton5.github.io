"use client";

import React from "react";

import * as S from "./styles";

type BioPanelProps = {
    children: React.ReactNode;
};

const BioPanel: React.FC<BioPanelProps> = ({ children }) => (
    <S.Panel>{children}</S.Panel>
);

export default BioPanel;
