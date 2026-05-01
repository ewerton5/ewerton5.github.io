import { FaCertificate } from "react-icons/fa";

import CertificationCard from "Components/Molecules/CertificationCard";
import EducationSectionHeader from "Components/Molecules/EducationSectionHeader";
import educationData from "data/education.json";

export default function CertificationsFormationSection() {
    return (
        <section className="mb-xxlarge">
            <EducationSectionHeader
                icon={<FaCertificate />}
                title="Cursos & Certificações"
            />
            <ul className="divide-y divide-gray-100">
                {educationData.certifications.map((cert) => (
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
