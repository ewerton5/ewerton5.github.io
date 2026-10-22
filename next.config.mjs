import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    // In `next dev`, `output: "export"` makes the dev server enforce the
    // same strict rule as the static build (every param must be in
    // generateStaticParams()), but without a graceful 404 — it crashes
    // outright, even with a not-found.tsx handling the case. We restrict it
    // to the production build (`next build`/`next start` always run with
    // NODE_ENV=production) so the dev server behaves like a normal server,
    // where notFound() from [lang]/layout.tsx is respected.
    output: process.env.NODE_ENV === "production" ? "export" : undefined,
    eslint: {
        ignoreDuringBuilds: true
    },
    // JSON data lives in public/data so it is also served as static files
    // (fetchable at /data/...). The tsconfig `paths` entry covers static
    // imports; dynamic template imports (`data/${locale}/...`) need the
    // webpack alias.
    webpack: (config) => {
        config.resolve.alias.data = path.resolve("public/data");
        return config;
    }
};

export default nextConfig;
