import profile from "data/profile.json";

const HeroSubtitle = () => {
    const { name, title, heroSubtitle } = profile;
    return (
        <h2 className="text-medium text-text-secondary font-normal leading-relaxed [&_strong]:text-text">
            {heroSubtitle.prefix} <strong>{name}</strong>, {title}
            {heroSubtitle.suffix}
        </h2>
    );
};

export default HeroSubtitle;
