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
                <div
                    tw="bg-slate-900 w-full h-full"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <div
                        tw="text-white"
                        style={{ display: "flex", margin: 0, fontSize: "60px" }}
                    >
                        Projeto não encontrado
                    </div>
                </div>
            ),
            { ...size }
        );
    }

    return new ImageResponse(
        (
            <div
                tw="bg-slate-900 w-full h-full"
                style={{ display: "flex", padding: "10px" }}
            >
                <div
                    tw="bg-slate-800 border-slate-700 w-full h-full"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: "24px",
                        borderWidth: "4px",
                        padding: "10px"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            backgroundColor:
                                project.backgroundColor || "#FFFFFF",
                            padding: "4px",
                            borderRadius: "24px",
                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5)"
                        }}
                    >
                        <img
                            src={`${baseUrl}${project.images.thumbnail}`}
                            width={160}
                            height={160}
                            style={{
                                width: "160px",
                                height: "160px",
                                borderRadius: "20px",
                                objectFit: "contain"
                            }}
                        />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "6px"
                        }}
                    >
                        <div
                            tw="text-white font-bold"
                            style={{
                                display: "flex",
                                margin: 0,
                                fontSize: "60px",
                                letterSpacing: "-0.02em"
                            }}
                        >
                            {project.title}
                        </div>
                        <div
                            tw="text-blue-400 font-semibold"
                            style={{
                                display: "flex",
                                margin: 0,
                                fontSize: "30px"
                            }}
                        >
                            Portfólio de {profile.shortName}
                        </div>

                        <div
                            style={{
                                display: "flex",
                                gap: "8px",
                                marginTop: "4px"
                            }}
                        >
                            {project.technologies.slice(0, 3).map((tech) => (
                                <div
                                    key={tech}
                                    tw="bg-blue-600 border-blue-400 text-white"
                                    style={{
                                        display: "flex",
                                        padding: "6px 20px",
                                        borderWidth: "1px",
                                        fontSize: "24px",
                                        borderRadius: "9999px"
                                    }}
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
