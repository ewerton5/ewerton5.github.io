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
            <div tw="flex w-full h-full bg-slate-900 items-center justify-center p-10">
                <div tw="flex flex-col items-center justify-center border-4 border-slate-700 rounded-3xl w-full h-full p-10 bg-slate-800 shadow-2xl">
                    <div
                        style={{
                            backgroundColor:
                                project.backgroundColor || "#FFFFFF"
                        }}
                        tw="flex items-center justify-center p-4 bg-white/10 rounded-3xl mb-6 shadow-lg"
                    >
                        <img
                            src={`${baseUrl}${project.images.thumbnail}`}
                            width={200}
                            height={200}
                            tw="w-48 h-48"
                            style={{ objectFit: "contain" }}
                        />
                    </div>

                    <div tw="flex flex-col items-center gap-6">
                        <h1 tw="text-white text-7xl font-bold tracking-tight text-center m-0">
                            {project.title}
                        </h1>
                        <p tw="text-blue-400 text-4xl text-center font-semibold m-0">
                            Portfólio de {profile.shortName}
                        </p>
                        <div tw="flex">
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
            </div>
        ),
        { ...size }
    );
}
