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
                <div tw="flex flex-col rounded-3xl bg-card-bg p-10 shadow-md border-4 border-slate-700 items-center gap-xsmall">
                    <img
                        src={profile.profilePicture}
                        width={160}
                        height={160}
                        alt={profile.shortName}
                        tw="w-40 h-40 rounded-full object-cover border-4 border-blue-500"
                    />

                    <div tw="flex flex-col items-center gap-xsmall">
                        <h1 tw="text-xxlarge">{profile.shortName}</h1>
                        <p tw="text-large font-semibold text-primary">
                            {profile.title}
                        </p>
                        <p tw="text-medium text-text-secondary max-w-2xl mt-small">
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
