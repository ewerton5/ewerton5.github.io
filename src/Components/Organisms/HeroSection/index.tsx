"use client";

import { useRouter } from "next/navigation";

import Button from "Components/Atoms/Button";
import HeroActions from "Components/Atoms/HeroActions";
import HeroImage from "Components/Atoms/HeroImage";
import HeroSubtitle from "Components/Atoms/HeroSubtitle";
import HeroTitle from "Components/Atoms/HeroTitle";
import type { Profile } from "types/data";
import type { Dictionary, Locale } from "types/dictionary";

type HeroSectionProps = {
    lang: Locale;
    dict: Dictionary;
    profile: Profile;
};

export default function HeroSection({ lang, dict, profile }: HeroSectionProps) {
    const router = useRouter();
    const imageSrc =
        profile.profilePicture || "https://github.com/ewerton5.png";

    return (
        <section className="flex items-center justify-between min-h-[80vh] gap-large pb-xxlarge max-tablet:flex-col-reverse max-tablet:text-center max-tablet:min-h-auto max-tablet:pt-large">
            <div className="flex-1">
                <HeroTitle dict={dict} />
                <HeroSubtitle profile={profile} />
                <HeroActions>
                    <Button
                        size="LARGE"
                        rounded
                        hierarchy="primary"
                        onClick={() => router.push(`/${lang}/portfolio`)}
                    >
                        {dict.hero.actions.viewProjects}
                    </Button>
                    <Button
                        size="LARGE"
                        rounded
                        hierarchy="secondary"
                        onClick={() => router.push(`/${lang}/contact`)}
                    >
                        {dict.hero.actions.contact}
                    </Button>
                </HeroActions>
            </div>
            <HeroImage src={imageSrc} alt={profile.name} />
        </section>
    );
}
