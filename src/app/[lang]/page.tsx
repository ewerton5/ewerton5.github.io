import HeroSection from "Components/Organisms/HeroSection";
import ServicesSection from "Components/Organisms/ServicesSection";
import TestimonialsSection from "Components/Organisms/TestimonialsSection";
import MainLayout from "Components/Templates/MainLayout";
import type { Locale } from "types/dictionary";
import { getDictionary, getSafeLocale } from "utils/getDictionary";

type HomeProps = {
    params: Promise<{ lang: string }>;
};

export default async function Home({ params }: HomeProps) {
    const { lang } = (await params) as { lang: Locale };
    const dict = await getDictionary(lang);
    const safeLocale = getSafeLocale(lang);

    const profile = await import(`data/${safeLocale}/profile.json`).then(
        (m) => m.default
    );
    const services = await import(`data/${safeLocale}/services.json`).then(
        (m) => m.default
    );
    const testimonials = await import(
        `data/${safeLocale}/testimonials.json`
    ).then((m) => m.default);

    return (
        <MainLayout lang={lang} dict={dict} profile={profile}>
            <div className="w-full animate-fade-in-up">
                <HeroSection lang={lang} dict={dict} profile={profile} />
                <ServicesSection dict={dict} services={services} />
                <TestimonialsSection dict={dict} testimonials={testimonials} />
            </div>
        </MainLayout>
    );
}
