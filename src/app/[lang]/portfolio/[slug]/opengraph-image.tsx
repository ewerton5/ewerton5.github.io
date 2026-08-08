import { ImageResponse } from "next/og";

import { baseUrl } from "constants/url";
import type { Locale } from "types/dictionary";
import type { Project } from "types/project";
import { getDictionary } from "utils/getDictionary";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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

export default async function Image({
    params
}: {
    params: Promise<{ lang: string; slug: string }>;
}) {
    const { lang, slug } = (await params) as { lang: Locale; slug: string };
    const profile = await import(`data/${lang}/profile.json`).then(
        (m) => m.default
    );
    const projects = (await import(`data/${lang}/projects.json`).then(
        (m) => m.default
    )) as unknown as Project[];
    const dict = await getDictionary(lang);
    const project = projects.find((p) => p.slug === slug);

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
                style={{ display: "flex", padding: "32px" }}
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
                        padding: "32px"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            backgroundColor:
                                project.backgroundColor || "#FFFFFF",
                            padding: "10px",
                            borderRadius: "24px",
                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5)"
                        }}
                    >
                        <img
                            src={`${baseUrl}${project.images.thumbnail}`}
                            width={260}
                            height={260}
                            style={{
                                width: "260px",
                                height: "260px",
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
                            {dict.portfolio.metadata.siteName.replace(
                                "{shortName}",
                                profile.shortName
                            )}
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
