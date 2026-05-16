import { FiGlobe } from "react-icons/fi";
import { SiGithub, SiGoogleplay, SiApple } from "react-icons/si";

import type { Project } from "types/project";

type LinkConfig = {
    href: string;
    label: string;
    icon: React.ReactNode;
    bg: string;
};

type ProjectLinksBarProps = {
    links: Project["links"];
};

const BASE_CLASSES =
    "flex items-center gap-[6px] px-medium py-xsmall text-white rounded-xl text-xsmall font-medium hover:opacity-80 transition-opacity";

export default function ProjectLinksBar({ links }: ProjectLinksBarProps) {
    if (!links || !Object.values(links).some(Boolean)) return null;

    const linkConfigs = (
        [
            links.web
                ? {
                      href: links.web,
                      label: "Acessar Site",
                      icon: <FiGlobe className="shrink-0" />,
                      bg: "bg-primary"
                  }
                : null,
            links.github
                ? {
                      href: links.github,
                      label: "Ver no GitHub",
                      icon: <SiGithub className="shrink-0" />,
                      bg: "bg-[#24292e]"
                  }
                : null,
            links.android
                ? {
                      href: links.android,
                      label: "Google Play",
                      icon: <SiGoogleplay className="shrink-0" />,
                      bg: "bg-[#01875f]"
                  }
                : null,
            links.ios
                ? {
                      href: links.ios,
                      label: "App Store",
                      icon: <SiApple className="shrink-0" />,
                      bg: "bg-[#000000]"
                  }
                : null
        ] as Array<LinkConfig | null>
    ).filter((c): c is LinkConfig => c !== null);

    return (
        <div className="flex flex-wrap gap-xsmall">
            {linkConfigs.map(({ href, label, icon, bg }) => (
                <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${BASE_CLASSES} ${bg}`}
                >
                    {icon}
                    {label}
                </a>
            ))}
        </div>
    );
}
