type TimelineCardProps = {
    year: string;
    title: string;
    description: string;
};

export default function TimelineCard({
    year,
    title,
    description
}: TimelineCardProps) {
    return (
        <div className="flex mb-medium bg-white rounded-lg overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.05)] max-laptop:flex-col">
            <div className="bg-primary text-white p-medium w-[200px] flex items-center justify-center font-bold text-medium max-laptop:w-full max-laptop:p-small">
                {year}
            </div>
            <div className="p-medium flex-1">
                <h3 className="mb-xsmall text-secondary">{title}</h3>
                <p className="text-text-secondary leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
