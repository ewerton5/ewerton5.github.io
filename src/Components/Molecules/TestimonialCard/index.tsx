"use client";

import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

import * as S from "./styles";

type TestimonialCardProps = {
    text: string;
    name: string;
    role: string;
    avatarUrl: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    text,
    name,
    role,
    avatarUrl
}) => (
    <S.Card>
        <FaQuoteLeft className="quote-icon" />
        <S.Quote>{`"${text}"`}</S.Quote>
        <S.AuthorRow>
            <S.Avatar src={avatarUrl} alt={name} />
            <S.AuthorMeta>
                <h4>{name}</h4>
                <span>{role}</span>
            </S.AuthorMeta>
        </S.AuthorRow>
    </S.Card>
);

export default TestimonialCard;
