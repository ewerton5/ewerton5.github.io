import PortfolioCatalog from "Components/Organisms/PortfolioCatalog";
import MainLayout from "Components/Templates/MainLayout";
import type { Locale } from "types/dictionary";
import type { Project } from "types/project";
import { getDictionary, getSafeLocale } from "utils/getDictionary";

type PortfolioProps = {
    params: Promise<{ lang: string }>;
};

export default async function Portfolio({ params }: PortfolioProps) {
    const { lang } = (await params) as { lang: Locale };
    const dict = await getDictionary(lang);
    const safeLocale = getSafeLocale(lang);

    const profile = await import(`data/${safeLocale}/profile.json`).then(
        (m) => m.default
    );
    const projects: Project[] = await import(
        `data/${safeLocale}/projects.json`
    ).then((m) => m.default);

    return (
        <MainLayout lang={lang} dict={dict} profile={profile}>
            <div className="w-full flex flex-col gap-large">
                <div className="text-center">
                    <h1 className="text-xxlarge font-bold text-secondary">
                        {dict.portfolio.title}
                    </h1>
                    <p className="text-medium text-text-secondary mt-xsmall">
                        {dict.portfolio.subtitle}
                    </p>
                </div>
                <PortfolioCatalog projects={projects} lang={lang} />
            </div>
        </MainLayout>
    );
}
