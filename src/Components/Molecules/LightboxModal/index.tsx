"use client";

import { useCallback, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

type LightboxModalProps = {
    images: string[];
    initialIndex: number;
    onClose: () => void;
};

export default function LightboxModal({
    images,
    initialIndex,
    onClose
}: LightboxModalProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const canGoPrev = currentIndex > 0;
    const canGoNext = currentIndex < images.length - 1;

    const goPrev = useCallback(() => {
        setCurrentIndex((i) => Math.max(0, i - 1));
    }, []);

    const goNext = useCallback(() => {
        setCurrentIndex((i) => Math.min(images.length - 1, i + 1));
    }, [images.length]);

    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [onClose, goPrev, goNext]);

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-large"
        >
            <button
                onClick={onClose}
                aria-label="Fechar tela cheia"
                className="absolute top-medium right-medium flex items-center justify-center w-10 h-10 rounded-full bg-[#00000033] text-white hover:bg-white/20 transition-colors"
            >
                <FiX size={22} color="#ffffff" />
            </button>

            {canGoPrev && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        goPrev();
                    }}
                    aria-label="Imagem anterior"
                    className="absolute left-medium top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#00000033] text-white hover:bg-white/20 transition-colors"
                >
                    <FiChevronLeft size={22} color="#ffffff" />
                </button>
            )}

            {canGoNext && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        goNext();
                    }}
                    aria-label="Próxima imagem"
                    className="absolute right-medium top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-[#00000033] text-white hover:bg-white/20 transition-colors"
                >
                    <FiChevronRight size={22} color="#ffffff" />
                </button>
            )}

            <img
                src={images[currentIndex]}
                alt="Imagem em tela cheia"
                onClick={(e) => e.stopPropagation()}
                className="max-w-full max-h-full object-contain rounded-xl"
            />
        </div>
    );
}
