import { FaExternalLinkAlt } from "react-icons/fa";

type CertificationCardProps = {
    title: string;
    platform: string;
    year: string;
    credentialUrl?: string;
};

export default function CertificationCard({
    title,
    platform,
    year,
    credentialUrl
}: CertificationCardProps) {
    const rowClasses =
        "group flex items-center justify-between py-3 px-2 rounded-lg transition-colors hover:bg-gray-50 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20";

    const content = (
        <>
            <span className="text-sm font-medium text-gray-400 w-16 shrink-0">
                {year}
            </span>
            <div className="flex-1">
                <p className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {title}
                </p>
                <p className="text-sm text-text-secondary mt-0.5">{platform}</p>
            </div>
            {credentialUrl && (
                <FaExternalLinkAlt className="text-gray-300 group-hover:text-primary transition-colors w-5 h-5 shrink-0 ml-4" />
            )}
        </>
    );

    if (credentialUrl) {
        return (
            <li>
                <a
                    href={credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={rowClasses}
                >
                    {content}
                </a>
            </li>
        );
    }

    return <li className={rowClasses}>{content}</li>;
}
