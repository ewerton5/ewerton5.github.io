"use client";

import { useEffect, useRef, useState } from "react";

type TechDropdownPickerProps = {
    options: string[];
    selected: string[];
    onChange: (selected: string[]) => void;
    className?: string;
};

export default function TechDropdownPicker({
    options,
    selected,
    onChange,
    className
}: TechDropdownPickerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filtered = options.filter((tech) =>
        tech.toLowerCase().includes(query.toLowerCase())
    );

    function toggleTech(tech: string) {
        onChange(
            selected.includes(tech)
                ? selected.filter((t) => t !== tech)
                : [...selected, tech]
        );
    }

    function clearAll() {
        onChange([]);
        setQuery("");
    }

    const hasSelection = selected.length > 0;
    const label = hasSelection
        ? `Tecnologias (${selected.length})`
        : "Tecnologias";

    return (
        <div ref={containerRef} className={`relative ${className ?? ""}`}>
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className={`flex items-center gap-xsmall px-medium py-xsmall rounded-full text-xsmall font-medium border transition-all duration-200 ${
                    hasSelection
                        ? "bg-primary text-white border-primary shadow-[0_2px_8px_rgba(10,116,218,0.3)]"
                        : "bg-gray-100 text-text-secondary border-gray-200 hover:border-primary hover:text-primary"
                }`}
            >
                {label}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full mt-2 left-0 z-50 w-64 bg-card-bg border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
                    <div className="p-xsmall border-b border-gray-100">
                        <input
                            type="text"
                            placeholder="Buscar tecnologia..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            autoFocus
                            className="w-full text-xsmall px-xsmall py-[6px] rounded-lg bg-gray-100 text-secondary placeholder:text-text-secondary outline-none focus:ring-1 focus:ring-primary"
                        />
                    </div>

                    <div className="max-h-48 overflow-y-auto p-xsmall flex flex-col gap-[2px]">
                        {filtered.length === 0 ? (
                            <p className="text-xxsmall text-text-secondary text-center py-small">
                                Nenhuma tecnologia encontrada
                            </p>
                        ) : (
                            filtered.map((tech) => (
                                <label
                                    key={tech}
                                    className="flex items-center gap-xsmall px-xsmall py-[5px] rounded-lg hover:bg-gray-50 cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selected.includes(tech)}
                                        onChange={() => toggleTech(tech)}
                                        className="accent-primary"
                                    />
                                    <span className="text-xsmall text-secondary">
                                        {tech}
                                    </span>
                                </label>
                            ))
                        )}
                    </div>

                    {hasSelection && (
                        <div className="border-t border-gray-100 p-xsmall">
                            <button
                                onClick={clearAll}
                                className="w-full text-xxsmall text-text-secondary hover:text-primary transition-colors py-[3px]"
                            >
                                Limpar seleção
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
