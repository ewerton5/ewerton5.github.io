"use client";

import React from "react";

import * as S from "./styles";

type HeroImageProps = {
    src: string;
    alt: string;
};

const HeroImage: React.FC<HeroImageProps> = ({ src, alt }) => (
    <S.Image src={src} alt={alt} />
);

export default HeroImage;
