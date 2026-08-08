import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FiTool } from "react-icons/fi";

import ProjectDetailsClient from "Components/Organisms/ProjectDetailsClient";
import MainLayout from "Components/Templates/MainLayout";
import { baseUrl } from "constants/url";
import type { Locale } from "types/dictionary";
import type { Project } from "types/project";
import { getDictionary, getSafeLocale } from "utils/getDictionary";

type Props = {
    params: Promise<{ lang: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang, slug } = (await params) as { lang: Locale; slug: string };
    const dict = await getDictionary(lang);
    const safeLocale = getSafeLocale(lang);
    const profile = await import(`data/${safeLocale}/profile.json`).then(
        (m) => m.default
    );
    const projects = await import(`data/${safeLocale}/projects.json`).then(
        (m) => m.default
    );
    const project = (projects as unknown as Project[]).find(
        (p) => p.slug === slug
    );

    if (!project) {
        return {
            title: dict.portfolio.metadata.notFoundTitle.replace(
                "{shortName}",
                profile.shortName
            )
        };
    }

    const title = dict.portfolio.metadata.titleTemplate
        .replace("{projectTitle}", project.title)
        .replace("{shortName}", profile.shortName);
    const description = project.shortDescription;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `${baseUrl}/${lang}/portfolio/${slug}`,
            siteName: dict.portfolio.metadata.siteName.replace(
                "{shortName}",
                profile.shortName
            ),
            locale: lang.replace("-", "_"),
            type: "website"
        },
        twitter: {
            card: "summary_large_image",
            title,
            description
        }
    };
}

type UnderConstructionProps = {
    projectTitle: string;
    description: string;
};

function UnderConstruction({
    projectTitle,
    description
}: UnderConstructionProps) {
    return (
        <div className="flex flex-col items-center justify-center py-xxlarge gap-medium text-center">
            <FiTool className="w-16 h-16 text-gray-300" />
            <h2 className="text-xlarge font-bold text-secondary">
                {projectTitle}
            </h2>
            <p className="text-medium text-text-secondary max-w-[480px]">
                {description}
            </p>
        </div>
    );
}

export async function generateStaticParams() {
    const ptProjects = await import("data/pt-BR/projects.json").then(
        (m) => m.default
    );
    const enProjects = await import("data/en-US/projects.json").then(
        (m) => m.default
    );

    const params: { lang: string; slug: string }[] = [];
    ptProjects.forEach((p) => params.push({ lang: "pt-BR", slug: p.slug }));
    enProjects.forEach((p) => params.push({ lang: "en-US", slug: p.slug }));

    return params;
}

export default async function ProjectDetailPage({ params }: Props) {
    const { lang, slug } = (await params) as { lang: Locale; slug: string };
    const dict = await getDictionary(lang);
    const safeLocale = getSafeLocale(lang);

    const profile = await import(`data/${safeLocale}/profile.json`).then(
        (m) => m.default
    );
    const projects = await import(`data/${safeLocale}/projects.json`).then(
        (m) => m.default
    );
    const project = (projects as unknown as Project[]).find(
        (p) => p.slug === slug
    );

    if (!project) {
        notFound();
    }

    try {
        const projectDetails = await import(
            `data/${safeLocale}/details/${slug}.json`
        );

        const fullProject = { ...project, ...projectDetails.default };

        return (
            <MainLayout lang={lang} dict={dict} profile={profile}>
                <ProjectDetailsClient
                    project={fullProject}
                    backHref={`/${lang}/portfolio`}
                    backLabel={dict.portfolio.projectHeader.backToPortfolio}
                />
            </MainLayout>
        );
    } catch {
        return (
            <MainLayout lang={lang} dict={dict} profile={profile}>
                <UnderConstruction
                    projectTitle={project.title}
                    description={dict.portfolio.underConstruction.description}
                />
            </MainLayout>
        );
    }
}
