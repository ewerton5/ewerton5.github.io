import { getMappedIcon } from "utils/icon";

type TechBadgeProps = {
    name: string;
};

export default function TechBadge({ name }: TechBadgeProps) {
    const IconComponent = getMappedIcon(name);

    return (
        <span className="flex items-center gap-[5px] px-xsmall py-[5px] rounded-lg bg-gray-100 border border-gray-200 text-xxsmall font-medium text-text-secondary">
            <IconComponent className="text-small text-primary shrink-0" />
            {name}
        </span>
    );
}
