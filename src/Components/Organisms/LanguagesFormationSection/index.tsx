import { FaGlobe } from "react-icons/fa";

import LangBadge, { LangBadgeList } from "Components/Atoms/LangBadge";
import EducationSectionHeader from "Components/Molecules/EducationSectionHeader";
import educationData from "data/education.json";

export default function LanguagesFormationSection() {
    return (
        <section className="mb-xxlarge">
            <EducationSectionHeader icon={<FaGlobe />} title="Idiomas" />
            <LangBadgeList>
                {educationData.languages.map((lang) => (
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
