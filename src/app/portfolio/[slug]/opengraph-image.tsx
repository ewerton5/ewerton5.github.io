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
                    <h1 tw="text-white text-6xl m-0">Projeto não encontrado</h1>
                </div>
            ),
            { ...size }
        );
    }

    return new ImageResponse(
        (
            <div tw="flex w-full h-full bg-slate-900 items-center justify-center p-10">
                <div tw="flex flex-col rounded-3xl bg-slate-800 p-10 shadow-md border-4 border-slate-700 items-center gap-6">
                    <div
                        style={{
                            backgroundColor:
                                project.backgroundColor || "#FFFFFF"
                        }}
                        tw="flex p-6 rounded-3xl shadow-lg items-center justify-center"
                    >
                        <img
                            src={`${baseUrl}${project.images.thumbnail}`}
                            width={160}
                            height={160}
                            tw="w-40 h-40 rounded-full"
                            style={{ objectFit: "contain" }}
                        />
                    </div>

                    <div tw="flex flex-col items-center gap-4">
                        <h1 tw="text-6xl text-white m-0 text-center tracking-tight">
                            {project.title}
                        </h1>
                        <p tw="text-3xl font-semibold text-blue-400 m-0 text-center">
                            Portfólio de {profile.shortName}
                        </p>
                        <div tw="flex mt-4">
                            {project.technologies.slice(0, 3).map((tech) => (
                                <span
                                    tw="px-5 py-2 bg-blue-600 border border-blue-400 text-white text-2xl rounded-full mx-2"
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
