import { FaCertificate } from "react-icons/fa";

import CertificationCard from "Components/Molecules/CertificationCard";
import EducationSectionHeader from "Components/Molecules/EducationSectionHeader";
import type { Education } from "types/data";
import type { Dictionary } from "types/dictionary";

type CertificationsFormationSectionProps = {
    dict: Dictionary;
    education: Education;
};

export default function CertificationsFormationSection({
    dict,
    education
}: CertificationsFormationSectionProps) {
    return (
        <section className="mb-xxlarge">
            <EducationSectionHeader
                icon={<FaCertificate />}
                title={dict.formation.certifications.title}
            />
            <ul className="divide-y divide-gray-100">
                {education.certifications.map((cert) => (
                    <CertificationCard
                        key={cert.id}
                        title={cert.title}
                        platform={cert.platform}
                        year={cert.year}
                        credentialUrl={cert.credentialUrl}
                    />
                ))}
            </ul>
        </section>
    );
}
