"use client";

import { useEffect } from "react";
import { FiX } from "react-icons/fi";

type LightboxModalProps = {
    imageUrl: string;
    onClose: () => void;
};

export default function LightboxModal({
    imageUrl,
    onClose
}: LightboxModalProps) {
    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
        }
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [onClose]);

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-large"
        >
            <button
                onClick={onClose}
                aria-label="Fechar tela cheia"
                className="absolute top-medium right-medium flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
                <FiX size={22} />
            </button>
            <img
                src={imageUrl}
                alt="Imagem em tela cheia"
                onClick={(e) => e.stopPropagation()}
                className="max-w-full max-h-full object-contain rounded-xl"
            />
        </div>
    );
}
