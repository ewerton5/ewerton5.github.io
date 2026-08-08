import SectionTitle from "Components/Atoms/SectionTitle";
import TestimonialsCarousel from "Components/Molecules/TestimonialsCarousel";
import type { Testimonial } from "types/data";
import type { Dictionary } from "types/dictionary";

type TestimonialsSectionProps = {
    dict: Dictionary;
    testimonials: Testimonial[];
};

export default function TestimonialsSection({
    dict,
    testimonials
}: TestimonialsSectionProps) {
    return (
        <section className="py-xxlarge">
            <SectionTitle>{dict.testimonials.title}</SectionTitle>
            <TestimonialsCarousel testimonials={testimonials} />
        </section>
    );
}
