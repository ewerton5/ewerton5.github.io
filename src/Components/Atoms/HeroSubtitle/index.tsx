type HeroSubtitleProps = {
    name: string;
    title: string;
};

const HeroSubtitle = ({ name, title }: HeroSubtitleProps) => (
    <h2 className="text-medium text-text-secondary font-normal leading-relaxed [&_strong]:text-text">
        Olá, eu sou <strong>{name}</strong>, {title}. Construo aplicações web e
        mobile de alta performance e lidero equipes de desenvolvimento focadas
        em resultados.
    </h2>
);

export default HeroSubtitle;
