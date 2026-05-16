import type { PlatformDetail } from "types/project";

type PlatformTabsProps = {
    platforms: PlatformDetail[];
    activeIndex: number;
    onChange: (index: number) => void;
};

export default function PlatformTabs({
    platforms,
    activeIndex,
    onChange
}: PlatformTabsProps) {
    if (platforms.length <= 1) return null;

    return (
        <div className="flex flex-wrap gap-xsmall border-b border-gray-200 pb-xsmall">
            {platforms.map((platform, index) => (
                <button
                    key={platform.name}
                    onClick={() => onChange(index)}
                    className={`px-medium py-xsmall rounded-t-xl text-xsmall font-medium transition-all duration-200 ${
                        activeIndex === index
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-text-secondary hover:bg-gray-200"
                    }`}
                >
                    {platform.name}
                </button>
            ))}
        </div>
    );
}
