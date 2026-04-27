import PortfolioCard from "Components/Molecules/PortfolioCard";
import MainLayout from "Components/Templates/MainLayout";
import projects from "data/projects.json";

const Portfolio = () => {
    return (
        <MainLayout>
            <div className="w-full">
                <h1 className="text-center mb-large">Meu Portfólio</h1>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-medium">
                    {projects.map((project) => (
                        <PortfolioCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default Portfolio;
