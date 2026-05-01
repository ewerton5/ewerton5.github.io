import HeroSection from "Components/Organisms/HeroSection";
import ServicesSection from "Components/Organisms/ServicesSection";
import TestimonialsSection from "Components/Organisms/TestimonialsSection";
import MainLayout from "Components/Templates/MainLayout";

export default function Home() {
    return (
        <MainLayout>
            <div className="w-full animate-fade-in-up">
                <HeroSection />
                <ServicesSection />
                <TestimonialsSection />
            </div>
        </MainLayout>
    );
}
