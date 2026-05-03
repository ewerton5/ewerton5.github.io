import { type IconType } from "react-icons";
import { FiCode } from "react-icons/fi";
import {
    SiReact,
    SiNodedotjs,
    SiFirebase,
    SiPostgresql,
    SiFlutter,
    SiSqlite,
    SiSupabase,
    SiCypress,
    SiRedux,
    SiTypescript,
    SiJavascript,
    SiNextdotjs,
    SiTailwindcss,
    SiDocker,
    SiGithub,
    SiAndroid,
    SiApple
} from "react-icons/si";

const ICON_MAP: Record<string, IconType> = {
    react: SiReact,
    "react native": SiReact,
    "react native web": SiReact,
    "node.js": SiNodedotjs,
    nodejs: SiNodedotjs,
    firebase: SiFirebase,
    postgresql: SiPostgresql,
    flutter: SiFlutter,
    flutterflow: SiFlutter,
    sqlite: SiSqlite,
    supabase: SiSupabase,
    cypress: SiCypress,
    redux: SiRedux,
    typescript: SiTypescript,
    javascript: SiJavascript,
    "next.js": SiNextdotjs,
    tailwind: SiTailwindcss,
    tailwindcss: SiTailwindcss,
    docker: SiDocker,
    github: SiGithub,
    android: SiAndroid,
    ios: SiApple
};

type TechBadgeProps = {
    name: string;
};

export default function TechBadge({ name }: TechBadgeProps) {
    const IconComponent = ICON_MAP[name.toLowerCase()] ?? FiCode;

    return (
        <span className="flex items-center gap-[5px] px-xsmall py-[5px] rounded-lg bg-gray-100 border border-gray-200 text-xxsmall font-medium text-text-secondary">
            <IconComponent className="text-small text-primary shrink-0" />
            {name}
        </span>
    );
}
