import PortfolioCard from "Components/Molecules/PortfolioCard";
import type { Locale } from "types/dictionary";
import type { Project } from "types/project";

type ProjectGridProps = {
    projects: Project[];
    lang: Locale;
};

export default function ProjectGrid({ projects, lang }: ProjectGridProps) {
    return (
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-medium">
            {projects.map((project) => (
                <PortfolioCard key={project.id} project={project} lang={lang} />
            ))}
        </div>
    );
}
