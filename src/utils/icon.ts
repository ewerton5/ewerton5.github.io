import { type IconType } from "react-icons";
import { FiCode } from "react-icons/fi";
import { HiLink } from "react-icons/hi2";
import { MdOutlineDesignServices } from "react-icons/md";
import {
    SiReact,
    SiExpo,
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

export const ICON_MAP: Record<string, IconType> = {
    react: SiReact,
    "react native": SiReact,
    expo: SiExpo,
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
    ios: SiApple,
    oauth: HiLink,
    "ux/ui": MdOutlineDesignServices
};

export const getMappedIcon = (name: string) =>
    ICON_MAP[name.toLowerCase()] ?? FiCode;
