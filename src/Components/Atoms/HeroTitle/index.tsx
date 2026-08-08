import type { Dictionary } from "types/dictionary";

type HeroTitleProps = {
    dict: Dictionary;
};

export default function HeroTitle({ dict }: HeroTitleProps) {
    return (
        <h1 className="text-xxlarge leading-tight text-secondary mb-medium [&_span]:text-primary max-laptop:text-[36px] max-tablet:text-xlarge">
            {dict.hero.title.prefix} <span>{dict.hero.title.highlight}</span>
        </h1>
    );
}
