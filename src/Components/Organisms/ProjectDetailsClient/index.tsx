"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import {
    FiArrowLeft,
    FiGlobe,
    FiChevronLeft,
    FiChevronRight,
    FiX
} from "react-icons/fi";
import { SiGithub, SiGoogleplay, SiApple } from "react-icons/si";

import TechBadge from "Components/Molecules/TechBadge";
import type { Project } from "types/project";
import { formatDate } from "utils/date";

type ProjectDetailsClientProps = {
    project: Project;
};

export default function ProjectDetailsClient({
    project
}: ProjectDetailsClientProps) {
    const [activePlatformIndex, setActivePlatformIndex] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!fullscreenImage) return;
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") setFullscreenImage(null);
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [fullscreenImage]);

    const { title, categories, startDate, technologies, links, platforms } =
        project;
    const activePlatform = platforms![activePlatformIndex];

    const updateScrollState = useCallback(() => {
        const el = carouselRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
    }, []);

    useEffect(() => {
        const el = carouselRef.current;
        if (!el) return;
        el.scrollLeft = 0;
        updateScrollState();
    }, [activePlatformIndex, updateScrollState]);

    function scrollLeft() {
        carouselRef.current?.scrollBy({ left: -320, behavior: "smooth" });
    }

    function scrollRight() {
        carouselRef.current?.scrollBy({ left: 320, behavior: "smooth" });
    }

    return (
        <div className="flex flex-col gap-large">
            {/* Back navigation */}
            <Link
                href="/portfolio"
                className="flex items-center gap-xxsmall text-text-secondary hover:text-primary transition-colors text-xsmall w-fit"
            >
                <FiArrowLeft />
                Voltar ao Portfólio
            </Link>

            {/* Project Header */}
            <div className="flex flex-col gap-small">
                <div className="flex flex-wrap items-center gap-xsmall">
                    {categories.map((cat) => (
                        <span
                            key={cat}
                            className="px-xsmall py-[3px] rounded-md text-xxsmall font-semibold bg-primary/10 text-primary"
                        >
                            {cat}
                        </span>
                    ))}
                    <span className="text-xsmall text-text-secondary ml-auto">
                        {formatDate(startDate)}
                    </span>
                </div>

                <h1 className="text-xxlarge font-bold text-secondary leading-tight">
                    {title}
                </h1>

                <div className="flex flex-wrap gap-xsmall mt-xxsmall">
                    {technologies.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                    ))}
                </div>
            </div>

            {/* Links Bar */}
            {links && Object.values(links).some(Boolean) && (
                <div className="flex flex-wrap gap-xsmall">
                    {links.web && (
                        <a
                            href={links.web}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-[6px] px-medium py-xsmall bg-primary text-white rounded-xl text-xsmall font-medium hover:opacity-80 transition-opacity"
                        >
                            <FiGlobe className="shrink-0" />
                            Acessar Site
                        </a>
                    )}
                    {links.github && (
                        <a
                            href={links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-[6px] px-medium py-xsmall bg-[#24292e] text-white rounded-xl text-xsmall font-medium hover:opacity-80 transition-opacity"
                        >
                            <SiGithub className="shrink-0" />
                            Ver no GitHub
                        </a>
                    )}
                    {links.android && (
                        <a
                            href={links.android}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-[6px] px-medium py-xsmall bg-[#01875f] text-white rounded-xl text-xsmall font-medium hover:opacity-80 transition-opacity"
                        >
                            <SiGoogleplay className="shrink-0" />
                            Google Play
                        </a>
                    )}
                    {links.ios && (
                        <a
                            href={links.ios}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-[6px] px-medium py-xsmall bg-[#000000] text-white rounded-xl text-xsmall font-medium hover:opacity-80 transition-opacity"
                        >
                            <SiApple className="shrink-0" />
                            App Store
                        </a>
                    )}
                </div>
            )}

            {/* Platform Tabs */}
            {platforms!.length > 1 && (
                <div className="flex flex-wrap gap-xsmall border-b border-gray-200 pb-xsmall">
                    {platforms!.map((platform, index) => (
                        <button
                            key={platform.name}
                            onClick={() => setActivePlatformIndex(index)}
                            className={`px-medium py-xsmall rounded-t-xl text-xsmall font-medium transition-all duration-200 ${
                                activePlatformIndex === index
                                    ? "bg-primary text-white"
                                    : "bg-gray-100 text-text-secondary hover:bg-gray-200"
                            }`}
                        >
                            {platform.name}
                        </button>
                    ))}
                </div>
            )}

            {/* Active Platform Content */}
            <div className="flex flex-col gap-medium">
                <h2 className="text-large font-bold text-secondary">
                    {activePlatform.name}
                </h2>

                <p className="text-xsmall text-text-secondary leading-relaxed whitespace-pre-line">
                    {activePlatform.detailedDescription}
                </p>

                {activePlatform.learnings.length > 0 && (
                    <div className="flex flex-col gap-xsmall">
                        <h3 className="text-small font-semibold text-secondary">
                            Aprendizados & Destaques
                        </h3>
                        <ul className="flex flex-col gap-xxsmall">
                            {activePlatform.learnings.map((learning, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-xsmall text-xsmall text-text-secondary leading-relaxed"
                                >
                                    <span className="text-primary font-bold mt-[2px] shrink-0">
                                        •
                                    </span>
                                    {learning}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Horizontal Image Carousel — Play Store style */}
                {activePlatform.images.length > 0 && (
                    <div className="relative mt-small">
                        {/* Left arrow */}
                        {canScrollLeft && (
                            <button
                                onClick={scrollLeft}
                                aria-label="Rolar para a esquerda"
                                className="hidden tablet:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 items-center justify-center w-10 h-10 rounded-full bg-white text-secondary shadow-md hover:shadow-lg hover:scale-105 transition-all"
                            >
                                <FiChevronLeft size={20} />
                            </button>
                        )}

                        {/* Right arrow */}
                        {canScrollRight && (
                            <button
                                onClick={scrollRight}
                                aria-label="Rolar para a direita"
                                className="hidden tablet:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 items-center justify-center w-10 h-10 rounded-full bg-white text-secondary shadow-md hover:shadow-lg hover:scale-105 transition-all"
                            >
                                <FiChevronRight size={20} />
                            </button>
                        )}

                        {/* Scrollable track */}
                        <div
                            ref={carouselRef}
                            onScroll={updateScrollState}
                            className="flex overflow-x-auto snap-x snap-mandatory gap-medium hide-scrollbar pb-xsmall h-[400px] laptop:h-[500px]"
                        >
                            {activePlatform.images.map((image, i) => (
                                <div
                                    key={i}
                                    className="snap-center flex-none h-full w-auto relative"
                                >
                                    <img
                                        src={image.url}
                                        alt={`${activePlatform.name} — screenshot ${i + 1}`}
                                        onClick={() =>
                                            setFullscreenImage(image.url)
                                        }
                                        className="h-full w-auto object-contain rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            {fullscreenImage && (
                <div
                    onClick={() => setFullscreenImage(null)}
                    className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-large"
                >
                    <button
                        onClick={() => setFullscreenImage(null)}
                        aria-label="Fechar tela cheia"
                        className="absolute top-medium right-medium flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                    >
                        <FiX size={22} />
                    </button>
                    <img
                        src={fullscreenImage}
                        alt="Imagem em tela cheia"
                        onClick={(e) => e.stopPropagation()}
                        className="max-w-full max-h-full object-contain rounded-xl"
                    />
                </div>
            )}
        </div>
    );
}
