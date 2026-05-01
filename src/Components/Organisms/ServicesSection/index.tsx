import {
    FaMobileAlt,
    FaLaptopCode,
    FaUsersCog,
    FaServer,
    FaDatabase,
    FaClock,
    FaWifi
} from "react-icons/fa";

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
        case "server":
            return <FaServer size={32} />;
        case "database":
            return <FaDatabase size={32} />;
        case "realtime":
            return <FaClock size={32} />;
        case "iot":
            return <FaWifi size={32} />;
        default:
            return <FaLaptopCode size={32} />;
    }
};

const ServicesSection = () => (
    <section className="py-xxlarge">
        <SectionTitle>Minhas Especialidades</SectionTitle>
        <div className="flex items-stretch w-full overflow-x-auto snap-x snap-mandatory gap-medium pb-medium hide-scrollbar laptop:grid laptop:grid-cols-3 laptop:overflow-visible">
            {services.map((service) => (
                <div
                    key={service.id}
                    className="flex snap-start shrink-0 w-[85%] tablet:w-[45%] laptop:w-auto last:laptop:col-span-3 last:laptop:w-full"
                >
                    <ServiceCard
                        icon={renderServiceIcon(service.icon)}
                        title={service.title}
                        description={service.description}
                    />
                </div>
            ))}
        </div>
    </section>
);

export default ServicesSection;
