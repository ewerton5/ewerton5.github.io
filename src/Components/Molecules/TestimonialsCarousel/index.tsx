"use client";

import { useRef, useState, useEffect } from "react";

import TestimonialCard from "Components/Molecules/TestimonialCard";

type Testimonial = {
    id: string;
    text: string;
    name: string;
    role: string;
    avatarUrl: string;
};

type Props = {
    testimonials: Testimonial[];
};

export default function TestimonialsCarousel({ testimonials }: Props) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [atEnd, setAtEnd] = useState(false);

    function handleScroll() {
        const el = scrollRef.current;
        if (!el) return;
        setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
    }

    useEffect(() => {
        handleScroll();
    }, []);

    return (
        <div className="relative">
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex items-stretch w-full overflow-x-auto snap-x snap-mandatory gap-medium pb-medium hide-scrollbar"
            >
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="flex snap-start shrink-0 w-[85%] tablet:w-[45%] laptop:w-[30%]"
                    >
                        <TestimonialCard
                            text={testimonial.text}
                            name={testimonial.name}
                            role={testimonial.role}
                            avatarUrl={testimonial.avatarUrl}
                        />
                    </div>
                ))}
            </div>
            {testimonials?.length > 3 && atEnd && (
                <div className="hidden tablet:block pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-background)] to-transparent" />
            )}
            {testimonials?.length > 3 && !atEnd && (
                <div className="hidden tablet:block pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-background)] to-transparent" />
            )}
        </div>
    );
}
