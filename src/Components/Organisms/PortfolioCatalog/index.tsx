"use client";

import { useState } from "react";

import EmptyState from "Components/Molecules/EmptyState";
import FilterTabs from "Components/Molecules/FilterTabs";
import ProjectGrid from "Components/Molecules/ProjectGrid";
import SearchInput from "Components/Molecules/SearchInput";
import TechDropdownPicker from "Components/Molecules/TechDropdownPicker";
import { usePortfolioFilters } from "hooks/usePortfolioFilters";
import type { Project } from "types/project";

const CATEGORIES = ["Todos", "Mobile", "Web", "Backend"];

type PortfolioCatalogProps = {
    projects: Project[];
};

export default function PortfolioCatalog({ projects }: PortfolioCatalogProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("Todos");
    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

    const { uniqueTechnologies, filtered } = usePortfolioFilters({
        projects,
        searchTerm,
        activeCategory,
        selectedTechs
    });

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
                <ProjectGrid projects={filtered} />
            ) : (
                <EmptyState
                    title="Nenhum projeto encontrado"
                    description="Tente ajustar os filtros ou o termo de busca"
                />
            )}
        </section>
    );
}
