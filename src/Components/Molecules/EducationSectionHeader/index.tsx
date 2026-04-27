import type { ReactNode } from "react";

type EducationSectionHeaderProps = {
    icon: ReactNode;
    title: string;
};

const EducationSectionHeader = ({
    icon,
    title
}: EducationSectionHeaderProps) => (
    <div className="flex items-center gap-small mb-large border-b-2 border-gray-200 pb-xsmall [&_h2]:text-large [&_h2]:text-secondary [&_svg]:text-large [&_svg]:text-primary">
        {icon}
        <h2>{title}</h2>
    </div>
);

export default EducationSectionHeader;
