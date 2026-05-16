type EmptyStateProps = {
    title: string;
    description?: string;
};

export default function EmptyState({ title, description }: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-xxlarge gap-small text-center">
            <p className="text-medium font-semibold text-text-secondary">
                {title}
            </p>
            {description && (
                <p className="text-xsmall text-text-secondary">{description}</p>
            )}
        </div>
    );
}
