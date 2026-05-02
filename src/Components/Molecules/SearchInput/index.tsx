import { FiSearch } from "react-icons/fi";

type SearchInputProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
};

export default function SearchInput({
    value,
    onChange,
    placeholder = "Buscar por projeto ou tecnologia...",
    className
}: SearchInputProps) {
    return (
        <div className={`relative w-full ${className ?? ""}`}>
            <FiSearch className="absolute left-small top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none" />
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full pl-xxlarge pr-small py-xsmall rounded-xl border border-gray-200 bg-card-bg text-text text-small placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            />
        </div>
    );
}
