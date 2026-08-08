import BioSection from "Components/Organisms/BioSection";
import SetupSection from "Components/Organisms/SetupSection";
import TimelineSection from "Components/Organisms/TimelineSection";
import MainLayout from "Components/Templates/MainLayout";
import type { Locale } from "types/dictionary";
import { getDictionary, getSafeLocale } from "utils/getDictionary";

type AboutProps = {
    params: Promise<{ lang: string }>;
};

export default async function About({ params }: AboutProps) {
    const { lang } = (await params) as { lang: Locale };
    const dict = await getDictionary(lang);
    const safeLocale = getSafeLocale(lang);

    const profile = await import(`data/${safeLocale}/profile.json`).then(
        (m) => m.default
    );
    const timeline = await import(`data/${safeLocale}/timeline.json`).then(
        (m) => m.default
    );
    const setup = await import(`data/${safeLocale}/setup.json`).then(
        (m) => m.default
    );

    return (
        <MainLayout lang={lang} dict={dict} profile={profile}>
            <div className="w-full animate-fade-in-up">
                <h1 className="text-center mb-large">{dict.about.title}</h1>

                <BioSection profile={profile} />
                <TimelineSection dict={dict} timeline={timeline} />
                <SetupSection dict={dict} setup={setup} />
            </div>
        </MainLayout>
    );
}
