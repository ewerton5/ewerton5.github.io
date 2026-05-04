import { ImageResponse } from "next/og";

import profile from "data/profile.json";

export const dynamic = "force-static";

export const alt = `Portfólio de ${profile.shortName} - ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
                    <div style={{ display: "flex" }}>
                        <img
                            src={profile.profilePicture}
                            width={300}
                            height={300}
                            tw="border-blue-500"
                            style={{
                                width: "300px",
                                height: "300px",
                                borderRadius: "9999px",
                                borderWidth: "4px",
                                objectFit: "cover"
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
                            {profile.shortName}
                        </div>
                        <div
                            tw="text-blue-400 font-semibold"
                            style={{
                                display: "flex",
                                margin: 0,
                                fontSize: "30px"
                            }}
                        >
                            {profile.title}
                        </div>
                        <div
                            tw="text-slate-300"
                            style={{
                                display: "flex",
                                margin: 0,
                                fontSize: "24px"
                            }}
                        >
                            Especialista em React, React Native, Node.js e
                            arquitetura AWS.
                        </div>
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
