import SectionTitle from "Components/Atoms/SectionTitle";
import TestimonialsCarousel from "Components/Molecules/TestimonialsCarousel";
import testimonials from "data/testimonials.json";

export default function TestimonialsSection() {
    return (
        <section className="py-xxlarge">
            <SectionTitle>O que dizem sobre mim</SectionTitle>
            <TestimonialsCarousel testimonials={testimonials} />
        </section>
    );
}
