import { ImageResponse } from "next/og";

import profile from "data/profile.json";

export const dynamic = "force-static";

export const alt =
    "Portfólio de Ewerton Vieira - Tech Lead & Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div tw="flex w-full h-full bg-slate-900 items-center justify-center p-20">
                <div tw="flex flex-col items-center justify-center border-4 border-slate-700 rounded-3xl w-full h-full p-10 bg-slate-800 shadow-2xl">
                    <img
                        src={profile.profilePicture}
                        width={200}
                        height={200}
                        tw="w-48 h-48 rounded-full border-4 border-blue-500 mb-8 shadow-xl"
                        style={{ objectFit: "cover" }}
                    />

                    <h1 tw="text-white text-7xl font-bold tracking-tight text-center">
                        Ewerton Vieira
                    </h1>
                    <p tw="text-blue-400 text-4xl mt-4 text-center font-semibold">
                        Tech Lead & Software Engineer
                    </p>
                    <p tw="text-slate-300 text-2xl mt-8 text-center max-w-2xl">
                        Especialista em React, React Native, Node.js e
                        arquitetura AWS.
                    </p>
                </div>
            </div>
        ),
        { ...size }
    );
}
