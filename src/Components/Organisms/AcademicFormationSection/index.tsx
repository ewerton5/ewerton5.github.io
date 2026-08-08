import { FaUniversity } from "react-icons/fa";

import AcademicCard from "Components/Molecules/AcademicCard";
import EducationSectionHeader from "Components/Molecules/EducationSectionHeader";
import type { Education } from "types/data";
import type { Dictionary } from "types/dictionary";

type AcademicFormationSectionProps = {
    dict: Dictionary;
    education: Education;
};

export default function AcademicFormationSection({
    dict,
    education
}: AcademicFormationSectionProps) {
    return (
        <section className="mb-xxlarge">
            <EducationSectionHeader
                icon={<FaUniversity />}
                title={dict.formation.academic.title}
            />
            <div className="relative border-l border-gray-200 ml-3 mt-medium">
                {education.academic.map((item) => (
                    <AcademicCard
                        key={item.id}
                        degree={item.degree}
                        institution={item.institution}
                        period={item.period}
                        description={item.description}
                        credentialUrl={item.credentialUrl}
                    />
                ))}
            </div>
        </section>
    );
}
