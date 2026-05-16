type PlatformInfoProps = {
    name: string;
    description: string;
    learnings: string[];
};

export default function PlatformInfo({
    name,
    description,
    learnings
}: PlatformInfoProps) {
    return (
        <div className="flex flex-col gap-medium">
            <h2 className="text-large font-bold text-secondary">{name}</h2>

            <p className="text-xsmall text-text-secondary leading-relaxed whitespace-pre-line">
                {description}
            </p>

            {learnings.length > 0 && (
                <div className="flex flex-col gap-xsmall">
                    <h3 className="text-small font-semibold text-secondary">
                        Aprendizados & Destaques
                    </h3>
                    <ul className="flex flex-col gap-xxsmall">
                        {learnings.map((learning) => (
                            <li
                                key={learning}
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
        </div>
    );
}
