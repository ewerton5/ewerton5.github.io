import type { Profile } from "types/data";

type HeroSubtitleProps = {
    profile: Profile;
};

export default function HeroSubtitle({ profile }: HeroSubtitleProps) {
    const { name, title, heroSubtitle } = profile;
    return (
        <h2 className="text-medium text-text-secondary font-normal leading-relaxed [&_strong]:text-text">
            {heroSubtitle.prefix} <strong>{name}</strong>, {title}
            {heroSubtitle.suffix}
        </h2>
    );
}
