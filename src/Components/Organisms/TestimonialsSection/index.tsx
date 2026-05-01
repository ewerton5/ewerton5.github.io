import SectionTitle from "Components/Atoms/SectionTitle";
import TestimonialCard from "Components/Molecules/TestimonialCard";
import testimonials from "data/testimonials.json";

export default function TestimonialsSection() {
    return (
        <section className="py-xxlarge">
            <SectionTitle>O que dizem sobre mim</SectionTitle>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-large">
                {testimonials.map((testimonial) => (
                    <TestimonialCard
                        key={testimonial.id}
                        text={testimonial.text}
                        name={testimonial.name}
                        role={testimonial.role}
                        avatarUrl={testimonial.avatarUrl}
                    />
                ))}
            </div>
        </section>
    );
}
