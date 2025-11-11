import React from "react";

import PortfolioCard from "Components/Molecules/PortfolioCard";
import MainLayout from "Components/Templates/MainLayout";
import projects from "data/projects.json";

import { PageTitle, Container, PortfolioGrid } from "./styles";

const Portfolio: React.FC = () => {
    return (
        <MainLayout>
            <Container>
                <PageTitle>Meu Portfólio</PageTitle>
                <PortfolioGrid>
                    {projects.map((project) => (
                        <PortfolioCard key={project.id} project={project} />
                    ))}
                </PortfolioGrid>
            </Container>
        </MainLayout>
    );
};

export default Portfolio;
