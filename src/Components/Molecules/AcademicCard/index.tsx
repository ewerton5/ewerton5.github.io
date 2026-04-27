type AcademicCardProps = {
    degree: string;
    institution: string;
    period: string;
    description: string;
};

const AcademicCard = ({
    degree,
    institution,
    period,
    description
}: AcademicCardProps) => (
    <div className="bg-white border-l-4 border-primary p-large rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
        <h3 className="text-medium text-secondary mb-xxsmall">{degree}</h3>
        <h4 className="text-small text-text font-medium mb-xsmall">
            {institution}
        </h4>
        <span className="inline-block bg-gray-100 text-gray-600 px-[12px] py-[4px] rounded-[16px] text-xxsmall mb-small font-bold">
            {period}
        </span>
        <p className="text-text-secondary leading-relaxed text-small">
            {description}
        </p>
    </div>
);

export default AcademicCard;
