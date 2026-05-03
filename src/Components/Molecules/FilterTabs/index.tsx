type FilterTabsProps = {
    categories: string[];
    active: string;
    onChange: (category: string) => void;
};

export default function FilterTabs({
    categories,
    active,
    onChange
}: FilterTabsProps) {
    return (
        <div className="flex flex-wrap gap-xsmall">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onChange(category)}
                    className={`px-small py-xsmall rounded-full text-xsmall font-medium transition-all duration-200 ${
                        active === category
                            ? "bg-primary text-white shadow-[0_2px_8px_rgba(10,116,218,0.3)]"
                            : "bg-gray-100 text-text-secondary border border-gray-200 hover:border-primary hover:text-primary"
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
