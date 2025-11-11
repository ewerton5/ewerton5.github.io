import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import {
    Card,
    CardImage,
    CardContent,
    CardTitle,
    CardDescription,
    CardLinks
} from "./styles";

interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    repoUrl: string;
    deployUrl: string;
}

interface PortfolioCardProps {
    project: Project;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
    return (
        <Card>
            <CardImage src={project.imageUrl} alt={project.title} />
            <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <CardLinks>
                    {project.repoUrl && (
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub /> Repositório
                        </a>
                    )}
                    {project.deployUrl && (
                        <a
                            href={project.deployUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaExternalLinkAlt /> Ver Deploy
                        </a>
                    )}
                </CardLinks>
            </CardContent>
        </Card>
    );
};

export default PortfolioCard;
