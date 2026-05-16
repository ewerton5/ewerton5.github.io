import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

import TechBadge from "Components/Molecules/TechBadge";
import { formatDate } from "utils/date";

type ProjectHeaderProps = {
    title: string;
    categories: string[];
    startDate: string;
    technologies: string[];
};

export default function ProjectHeader({
    title,
    categories,
    startDate,
    technologies
}: ProjectHeaderProps) {
    return (
        <div className="flex flex-col gap-small">
            <Link
                href="/portfolio"
                className="flex items-center gap-xxsmall text-text-secondary hover:text-primary transition-colors text-xsmall w-fit mb-small"
            >
                <FiArrowLeft />
                Voltar ao Portfólio
            </Link>

            <div className="flex flex-wrap items-center gap-xsmall">
                {categories.map((cat) => (
                    <span
                        key={cat}
                        className="px-xsmall py-[3px] rounded-md text-xxsmall font-semibold bg-primary/10 text-primary"
                    >
                        {cat}
                    </span>
                ))}
                <span className="text-xsmall text-text-secondary ml-auto">
                    {formatDate(startDate)}
                </span>
            </div>

            <h1 className="text-xxlarge font-bold text-secondary leading-tight mt-1">
                {title}
            </h1>

            <div className="flex flex-wrap gap-xsmall mt-xxsmall">
                {technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                ))}
            </div>
        </div>
    );
}
