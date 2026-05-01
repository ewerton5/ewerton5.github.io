import { FaUniversity } from "react-icons/fa";

import AcademicCard from "Components/Molecules/AcademicCard";
import EducationSectionHeader from "Components/Molecules/EducationSectionHeader";
import educationData from "data/education.json";

export default function AcademicFormationSection() {
    return (
        <section className="mb-xxlarge">
            <EducationSectionHeader
                icon={<FaUniversity />}
                title="Formação Acadêmica"
            />
            <div className="relative border-l border-gray-200 ml-3 mt-medium">
                {educationData.academic.map((item) => (
                    <AcademicCard
                        key={item.id}
                        degree={item.degree}
                        institution={item.institution}
                        period={item.period}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
}
