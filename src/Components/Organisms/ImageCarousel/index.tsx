"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import type { PlatformDetail } from "types/project";

type ImageCarouselProps = {
    images: PlatformDetail["images"];
    platformName: string;
    onImageClick: (url: string) => void;
};

export default function ImageCarousel({
    images,
    platformName,
    onImageClick
}: ImageCarouselProps) {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const carouselRef = useRef<HTMLDivElement>(null);

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
    }, [images, updateScrollState]);

    function scrollLeft() {
        carouselRef.current?.scrollBy({ left: -320, behavior: "smooth" });
    }

    function scrollRight() {
        carouselRef.current?.scrollBy({ left: 320, behavior: "smooth" });
    }

    if (images.length === 0) return null;

    return (
        <div className="relative mt-small">
            {canScrollLeft && (
                <button
                    onClick={scrollLeft}
                    aria-label="Rolar para a esquerda"
                    className="hidden tablet:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 items-center justify-center w-10 h-10 rounded-full bg-white text-secondary shadow-md hover:shadow-lg hover:scale-105 transition-all"
                >
                    <FiChevronLeft size={20} />
                </button>
            )}

            {canScrollRight && (
                <button
                    onClick={scrollRight}
                    aria-label="Rolar para a direita"
                    className="hidden tablet:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 items-center justify-center w-10 h-10 rounded-full bg-white text-secondary shadow-md hover:shadow-lg hover:scale-105 transition-all"
                >
                    <FiChevronRight size={20} />
                </button>
            )}

            <div
                ref={carouselRef}
                onScroll={updateScrollState}
                className="flex overflow-x-auto snap-x snap-mandatory gap-medium hide-scrollbar pb-xsmall h-[400px] laptop:h-[500px]"
            >
                {images.map((image, i) => (
                    <div
                        key={i}
                        className="snap-center flex-none h-full w-auto relative"
                    >
                        <img
                            src={image.url}
                            alt={`${platformName} — screenshot ${i + 1}`}
                            onClick={() => onImageClick(image.url)}
                            className="h-full w-auto object-contain rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
