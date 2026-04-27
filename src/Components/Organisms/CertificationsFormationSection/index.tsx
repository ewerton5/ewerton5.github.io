import { FaCertificate } from "react-icons/fa";

import CertificationCard from "Components/Molecules/CertificationCard";
import EducationSectionHeader from "Components/Molecules/EducationSectionHeader";
import educationData from "data/education.json";

const CertificationsFormationSection = () => (
    <section className="mb-xxlarge">
        <EducationSectionHeader
            icon={<FaCertificate />}
            title="Cursos & Certificações"
        />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-medium">
            {educationData.certifications.map((cert) => (
                <CertificationCard
                    key={cert.id}
                    title={cert.title}
                    platform={cert.platform}
                    year={cert.year}
                />
            ))}
        </div>
    </section>
);

export default CertificationsFormationSection;
