type CertificationCardProps = {
    title: string;
    platform: string;
    year: string;
};

export default function CertificationCard({
    title,
    platform,
    year
}: CertificationCardProps) {
    return (
        <div className="bg-white p-medium rounded-lg border border-gray-200 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-primary">
            <h4 className="text-small text-secondary mb-xxsmall">{title}</h4>
            <p className="text-xsmall text-text-secondary mb-xsmall">
                {platform}
            </p>
            <span className="text-xxsmall text-primary font-bold">{year}</span>
        </div>
    );
}
