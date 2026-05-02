"use client";

import { useMemo, useState } from "react";

import FilterTabs from "Components/Molecules/FilterTabs";
import PortfolioCard from "Components/Molecules/PortfolioCard";
import SearchInput from "Components/Molecules/SearchInput";
import TechDropdownPicker from "Components/Molecules/TechDropdownPicker";
import type { Project } from "types/project";

const CATEGORIES = ["Todos", "Mobile", "Web", "Backend"];

type PortfolioCatalogProps = {
    projects: Project[];
};

export default function PortfolioCatalog({ projects }: PortfolioCatalogProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("Todos");
    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

    const uniqueTechnologies = useMemo(() => {
        const techSet = new Set<string>();
        projects.forEach((p) => p.technologies.forEach((t) => techSet.add(t)));
        return Array.from(techSet).sort();
    }, [projects]);

    const filtered = useMemo(() => {
        const term = searchTerm.toLowerCase().trim();

        return projects.filter((project) => {
            const matchesCategory =
                activeCategory === "Todos" ||
                project.categories.includes(activeCategory);

            const matchesTechs =
                selectedTechs.length === 0 ||
                selectedTechs.some((t) => project.technologies.includes(t));

            if (!term) return matchesCategory && matchesTechs;

            const matchesSearch =
                project.title.toLowerCase().includes(term) ||
                project.shortDescription.toLowerCase().includes(term) ||
                project.technologies.some((tech) =>
                    tech.toLowerCase().includes(term)
                );

            return matchesCategory && matchesTechs && matchesSearch;
        });
    }, [projects, searchTerm, activeCategory, selectedTechs]);

    return (
        <section className="w-full flex flex-col gap-large">
            <div className="flex flex-col gap-medium">
                <FilterTabs
                    categories={CATEGORIES}
                    active={activeCategory}
                    onChange={setActiveCategory}
                />
                <div className="flex flex-col gap-small tablet:flex-row tablet:items-center">
                    <SearchInput
                        value={searchTerm}
                        onChange={setSearchTerm}
                        className="flex-1"
                    />
                    <TechDropdownPicker
                        options={uniqueTechnologies}
                        selected={selectedTechs}
                        onChange={setSelectedTechs}
                        className="w-full tablet:w-auto tablet:min-w-[200px]"
                    />
                </div>
            </div>

            {filtered.length > 0 ? (
                <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-medium">
                    {filtered.map((project) => (
                        <PortfolioCard key={project.id} project={project} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-xxlarge gap-small text-center">
                    <p className="text-medium font-semibold text-text-secondary">
                        Nenhum projeto encontrado
                    </p>
                    <p className="text-xsmall text-text-secondary">
                        Tente ajustar os filtros ou o termo de busca
                    </p>
                </div>
            )}
        </section>
    );
}
