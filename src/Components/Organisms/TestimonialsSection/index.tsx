"use client";

import React from "react";

import SectionTitle from "Components/Atoms/SectionTitle";
import TestimonialCard from "Components/Molecules/TestimonialCard";
import testimonials from "data/testimonials.json";

import * as S from "./styles";

const TestimonialsSection: React.FC = () => (
    <S.Section>
        <SectionTitle>O que dizem sobre mim</SectionTitle>
        <S.Grid>
            {testimonials.map((testimonial) => (
                <TestimonialCard
                    key={testimonial.id}
                    text={testimonial.text}
                    name={testimonial.name}
                    role={testimonial.role}
                    avatarUrl={testimonial.avatarUrl}
                />
            ))}
        </S.Grid>
    </S.Section>
);

export default TestimonialsSection;
