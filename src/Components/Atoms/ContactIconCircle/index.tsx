"use client";

import React from "react";

import * as S from "./styles";

type ContactIconCircleProps = {
    color: string;
    children: React.ReactNode;
};

const ContactIconCircle: React.FC<ContactIconCircleProps> = ({
    color,
    children
}) => <S.Circle $color={color}>{children}</S.Circle>;

export default ContactIconCircle;
