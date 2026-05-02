import PortfolioCatalog from "Components/Organisms/PortfolioCatalog";
import MainLayout from "Components/Templates/MainLayout";
import projects from "data/projects.json";
import type { Project } from "types/project";

export default function Portfolio() {
    return (
        <MainLayout>
            <div className="w-full flex flex-col gap-large">
                <div className="text-center">
                    <h1 className="text-xxlarge font-bold text-secondary">
                        Meu Portfólio
                    </h1>
                    <p className="text-medium text-text-secondary mt-xsmall">
                        Explore os projetos. Filtre por categoria ou busque por
                        tecnologia.
                    </p>
                </div>
                <PortfolioCatalog projects={projects as unknown as Project[]} />
            </div>
        </MainLayout>
    );
}
