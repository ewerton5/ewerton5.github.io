import AcademicFormationSection from "Components/Organisms/AcademicFormationSection";
import CertificationsFormationSection from "Components/Organisms/CertificationsFormationSection";
import LanguagesFormationSection from "Components/Organisms/LanguagesFormationSection";
import MainLayout from "Components/Templates/MainLayout";
import type { Locale } from "types/dictionary";
import { getDictionary, getSafeLocale } from "utils/getDictionary";

type GraduationProps = {
    params: Promise<{ lang: string }>;
};

export default async function Graduation({ params }: GraduationProps) {
    const { lang } = (await params) as { lang: Locale };
    const dict = await getDictionary(lang);
    const safeLocale = getSafeLocale(lang);

    const profile = await import(`data/${safeLocale}/profile.json`).then(
        (m) => m.default
    );
    const education = await import(`data/${safeLocale}/education.json`).then(
        (m) => m.default
    );

    return (
        <MainLayout lang={lang} dict={dict} profile={profile}>
            <div className="w-full animate-fade-in-up">
                <h1 className="text-center mb-xlarge">
                    {dict.formation.title}
                </h1>

                <AcademicFormationSection dict={dict} education={education} />
                <CertificationsFormationSection
                    dict={dict}
                    education={education}
                />
                <LanguagesFormationSection dict={dict} education={education} />
            </div>
        </MainLayout>
    );
}
