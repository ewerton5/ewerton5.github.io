import { ImageResponse } from "next/og";

import { baseUrl } from "constants/url";
import profile from "data/profile.json";
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
            <div
                style={{
                    backgroundColor: project.backgroundColor || "#FFFFFF"
                }}
                tw="flex w-full h-full items-center justify-center p-20"
            >
                <div tw="flex flex-col items-center justify-center border border-white/20 rounded-3xl w-full h-full p-10 bg-black/60 shadow-2xl">
                    <div tw="flex items-center justify-center p-8 bg-white/10 rounded-3xl mb-6 shadow-lg">
                        <img
                            src={`${baseUrl}${project.images.thumbnail}`}
                            width={220}
                            height={220}
                            tw="w-56 h-56"
                            style={{ objectFit: "contain" }}
                        />
                    </div>

                    <h1 tw="text-white text-7xl font-bold tracking-tight text-center">
                        {project.title}
                    </h1>
                    <p tw="text-slate-200 text-3xl mt-4 text-center">
                        Portfólio de {profile.shortName}
                    </p>
                    <div tw="flex mt-8">
                        {project.technologies.slice(0, 3).map((tech) => (
                            <span
                                tw="px-5 py-2 bg-blue-600/80 border border-blue-400/50 text-white text-2xl rounded-full mx-2"
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
