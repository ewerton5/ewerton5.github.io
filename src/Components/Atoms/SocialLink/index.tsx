import type { ReactNode } from "react";

type SocialLinkProps = {
    href: string;
    icon: ReactNode;
    ariaLabel: string;
};

export default function SocialLink({ href, icon, ariaLabel }: SocialLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className="text-secondary text-[1.5rem] transition-colors duration-200 hover:text-primary"
        >
            {icon}
        </a>
    );
}
