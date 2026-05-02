type TechChipProps = {
    label: string;
    active?: boolean;
    onClick: (label: string) => void;
};

export default function TechChip({
    label,
    active = false,
    onClick
}: TechChipProps) {
    return (
        <button
            onClick={() => onClick(label)}
            className={`px-xsmall py-[3px] rounded-md text-xxsmall font-medium transition-all duration-200 ${
                active
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-text-secondary hover:bg-gray-200 hover:text-primary"
            }`}
        >
            {label}
        </button>
    );
}
