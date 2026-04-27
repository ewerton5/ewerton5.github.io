import { FaUniversity } from "react-icons/fa";

import AcademicCard from "Components/Molecules/AcademicCard";
import EducationSectionHeader from "Components/Molecules/EducationSectionHeader";
import educationData from "data/education.json";

const AcademicFormationSection = () => (
    <section className="mb-xxlarge">
        <EducationSectionHeader
            icon={<FaUniversity />}
            title="Formação Acadêmica"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-large">
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

export default AcademicFormationSection;
