import { ImageResponse } from "next/og";

import profile from "data/profile.json";

export const dynamic = "force-static";

export const alt = `Portfólio de ${profile.shortName} - ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div tw="flex w-full h-full bg-slate-900 items-center justify-center p-10">
                <div tw="flex flex-col rounded-3xl bg-slate-800 p-10 shadow-md border-4 border-slate-700 items-center gap-6">
                    <img
                        src={profile.profilePicture}
                        width={160}
                        height={160}
                        alt={profile.shortName}
                        tw="w-40 h-40 rounded-full border-4 border-blue-500"
                        style={{ objectFit: "cover" }}
                    />

                    <div tw="flex flex-col items-center gap-4">
                        <h1 tw="text-6xl text-white m-0 tracking-tight">
                            {profile.shortName}
                        </h1>
                        <p tw="text-3xl font-semibold text-blue-400 m-0">
                            {profile.title}
                        </p>
                        <p tw="text-2xl text-slate-300 max-w-2xl mt-2 m-0 text-center">
                            Especialista em React, React Native, Node.js e
                            arquitetura AWS.
                        </p>
                    </div>
                </div>
            </div>
        ),
        { ...size }
    );
}
