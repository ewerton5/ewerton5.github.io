import { FaGlobe } from "react-icons/fa";

import LangBadge, { LangBadgeList } from "Components/Atoms/LangBadge";
import EducationSectionHeader from "Components/Molecules/EducationSectionHeader";
import type { Education } from "types/data";
import type { Dictionary } from "types/dictionary";

type LanguagesFormationSectionProps = {
    dict: Dictionary;
    education: Education;
};

export default function LanguagesFormationSection({
    dict,
    education
}: LanguagesFormationSectionProps) {
    return (
        <section className="mb-xxlarge">
            <EducationSectionHeader
                icon={<FaGlobe />}
                title={dict.formation.languages.title}
            />
            <LangBadgeList>
                {education.languages.map((lang) => (
                    <LangBadge
                        key={lang.id}
                        language={lang.language}
                        level={lang.level}
                    />
                ))}
            </LangBadgeList>
        </section>
    );
}
