import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FiTool } from "react-icons/fi";

import ProjectDetailsClient from "Components/Organisms/ProjectDetailsClient";
import MainLayout from "Components/Templates/MainLayout";
import { baseUrl } from "constants/url";
import profile from "data/profile.json";
import projects from "data/projects.json";
import type { Project } from "types/project";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const project = projects.find((p) => p.slug === resolvedParams.slug);

    if (!project) {
        return {
            title: `Projeto não encontrado | ${profile.shortName}`
        };
    }

    const title = `Veja ${project.title} | Portfólio de ${profile.shortName}`;
    const description = project.shortDescription;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `${baseUrl}/portfolio/${resolvedParams.slug}`,
            siteName: `${profile.shortName} - Portfólio`,
            images: [
                {
                    url: project.images.thumbnail,
                    width: 1200,
                    height: 630,
                    alt: `Capa do projeto ${project.title}`
                }
            ],
            locale: "pt_BR",
            type: "website"
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [project.images.thumbnail]
        }
    };
}

type UnderConstructionProps = {
    projectTitle: string;
};

function UnderConstruction({ projectTitle }: UnderConstructionProps) {
    return (
        <div className="flex flex-col items-center justify-center py-xxlarge gap-medium text-center">
            <FiTool className="w-16 h-16 text-gray-300" />
            <h2 className="text-xlarge font-bold text-secondary">
                {projectTitle}
            </h2>
            <p className="text-medium text-text-secondary max-w-[480px]">
                O detalhamento deste projeto ainda está sendo preparado. Volte
                em breve para mais informações.
            </p>
        </div>
    );
}

export function generateStaticParams() {
    return (projects as unknown as Project[]).map((p) => ({ slug: p.slug }));
}

type ProjectDetailPageProps = {
    params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({
    params
}: ProjectDetailPageProps) {
    const { slug } = await params;
    const project = (projects as unknown as Project[]).find(
        (p) => p.slug === slug
    );

    if (!project) {
        notFound();
    }

    try {
        const projectDetails = await import(`data/details/${slug}.json`);

        const fullProject = { ...project, ...projectDetails.default };

        return (
            <MainLayout>
                <ProjectDetailsClient project={fullProject} />
            </MainLayout>
        );
    } catch {
        return (
            <MainLayout>
                <UnderConstruction projectTitle={project.title} />
            </MainLayout>
        );
    }
}
