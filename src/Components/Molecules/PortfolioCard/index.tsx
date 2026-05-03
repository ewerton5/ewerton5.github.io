import Link from "next/link";

import type { Project } from "types/project";
import { formatDate } from "utils/date";

type PortfolioCardProps = {
    project: Project;
};

export default function PortfolioCard({ project }: PortfolioCardProps) {
    const { slug, title, shortDescription, technologies, images, startDate } =
        project;

    return (
        <Link
            href={`/portfolio/${slug}`}
            className="group flex flex-col bg-card-bg rounded-2xl overflow-hidden border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
        >
            <div
                className="relative w-full h-[200px] overflow-hidden bg-gray-100"
                style={{
                    backgroundColor: project.backgroundColor
                }}
            >
                <img
                    src={images.thumbnail}
                    alt={title}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 p-10"
                />
            </div>

            <div className="p-medium flex flex-col gap-xsmall flex-1">
                <div className="flex items-start justify-between gap-xsmall">
                    <h3 className="text-small font-semibold text-secondary leading-snug">
                        {title}
                    </h3>
                    <span className="text-xxsmall text-text-secondary whitespace-nowrap mt-[2px] shrink-0">
                        {formatDate(startDate)}
                    </span>
                </div>
                <p className="text-xsmall text-text-secondary leading-relaxed line-clamp-5 flex-1">
                    {shortDescription}
                </p>
            </div>

            <div className="px-medium pb-medium flex flex-wrap gap-[6px]">
                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className="px-xsmall py-[3px] rounded-md text-xxsmall font-medium bg-gray-100 text-text-secondary"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </Link>
    );
}
