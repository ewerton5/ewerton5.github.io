import { FaMobileAlt, FaLaptopCode, FaUsersCog } from "react-icons/fa";

import SectionTitle from "Components/Atoms/SectionTitle";
import ServiceCard from "Components/Molecules/ServiceCard";
import services from "data/services.json";

const renderServiceIcon = (iconName: string) => {
    switch (iconName) {
        case "leadership":
            return <FaUsersCog size={32} />;
        case "mobile":
            return <FaMobileAlt size={32} />;
        case "web":
            return <FaLaptopCode size={32} />;
        default:
            return <FaLaptopCode size={32} />;
    }
};

const ServicesSection = () => (
    <section className="py-xxlarge">
        <SectionTitle>Minhas Especialidades</SectionTitle>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-large">
            {services.map((service) => (
                <ServiceCard
                    key={service.id}
                    icon={renderServiceIcon(service.icon)}
                    title={service.title}
                    description={service.description}
                />
            ))}
        </div>
    </section>
);

export default ServicesSection;
