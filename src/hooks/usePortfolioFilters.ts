import { useMemo } from "react";

import type { Project } from "types/project";

type UsePortfolioFiltersParams = {
    projects: Project[];
    searchTerm: string;
    activeCategory: string;
    selectedTechs: string[];
};

type UsePortfolioFiltersResult = {
    uniqueTechnologies: string[];
    filtered: Project[];
};

export function usePortfolioFilters({
    projects,
    searchTerm,
    activeCategory,
    selectedTechs
}: UsePortfolioFiltersParams): UsePortfolioFiltersResult {
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

    return { uniqueTechnologies, filtered };
}
