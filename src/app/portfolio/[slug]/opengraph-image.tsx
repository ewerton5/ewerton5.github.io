import { ImageResponse } from "next/og";

import { baseUrl } from "constants/url";
import projects from "data/projects.json";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug
    }));
}

export default async function Image({
    params
}: {
    params: Promise<{ slug: string }>;
}) {
    const resolvedParams = await params;
    const project = projects.find((p) => p.slug === resolvedParams.slug);

    if (!project) {
        return new ImageResponse(
            (
                <div tw="flex w-full h-full bg-gray-900 items-center justify-center">
                    <h1 tw="text-white text-6xl">Projeto não encontrado</h1>
                </div>
            ),
            { ...size }
        );
    }

    return new ImageResponse(
        (
            <div tw="flex w-full h-full bg-slate-900 items-center justify-center p-20">
                <div tw="flex flex-col items-center justify-center border-4 border-slate-700 rounded-3xl w-full h-full p-10 bg-slate-800">
                    <img
                        src={`${baseUrl}${project.images.thumbnail}`}
                        tw="w-64 h-64 mb-8"
                        style={{ objectFit: "contain" }}
                    />
                    <h1 tw="text-white text-7xl font-bold tracking-tight text-center">
                        {project.title}
                    </h1>
                    <p tw="text-slate-300 text-3xl mt-4 text-center">
                        Portfólio de Ewerton Vieira
                    </p>
                    <div tw="flex mt-8">
                        {project.technologies.slice(0, 3).map((tech) => (
                            <span
                                tw="px-4 py-2 bg-blue-600 text-white text-2xl rounded-full mx-2"
                                key={tech}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
