import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    backgroundColor?: string;
    repoUrl?: string;
    deployUrl?: string;
}

interface PortfolioCardProps {
    project: Project;
}

const cardClasses =
    "bg-card-bg rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)]";

const linkClasses =
    "flex items-center gap-xxsmall text-primary font-medium text-xsmall hover:underline";

export default function PortfolioCard({ project }: PortfolioCardProps) {
    return (
        <div className={cardClasses}>
            <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-[200px] object-contain"
                style={{
                    backgroundColor: project.backgroundColor ?? "#0A74DA"
                }}
            />
            <div className="p-small flex flex-col flex-1">
                <h3 className="text-medium text-secondary mb-xsmall">
                    {project.title}
                </h3>
                <p className="text-small text-text-secondary leading-[1.5] flex-1 mb-small">
                    {project.description}
                </p>
                <div className="flex gap-small mt-auto">
                    {project.repoUrl && (
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linkClasses}
                        >
                            <FaGithub /> Repositório
                        </a>
                    )}
                    {project.deployUrl && (
                        <a
                            href={project.deployUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linkClasses}
                        >
                            <FaExternalLinkAlt /> Ver Deploy
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
