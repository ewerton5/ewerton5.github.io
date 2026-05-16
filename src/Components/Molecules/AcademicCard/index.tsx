import { FaExternalLinkAlt } from "react-icons/fa";

type AcademicCardProps = {
    degree: string;
    institution: string;
    period: string;
    description: string;
    credentialUrl?: string;
};

export default function AcademicCard({
    degree,
    institution,
    period,
    description,
    credentialUrl
}: AcademicCardProps) {
    return (
        <div className="mb-large ml-6 relative last:mb-0">
            <span className="absolute -left-[1.95rem] top-1.5 w-3 h-3 bg-primary rounded-full ring-4 ring-white" />
            <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-primary bg-primary/10 rounded-full">
                {period}
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{degree}</h3>
            <p className="text-medium font-medium text-text-secondary mb-2">
                {institution}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
                {description}
            </p>
            {credentialUrl && (
                <a
                    href={credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                >
                    <FaExternalLinkAlt className="w-2.5 h-2.5" />
                    Ver Diploma
                </a>
            )}
        </div>
    );
}
