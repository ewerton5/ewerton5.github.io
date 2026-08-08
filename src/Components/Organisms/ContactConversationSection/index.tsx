import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

import ContactCard from "Components/Molecules/ContactCard";
import profile from "data/profile.json";

const WHATSAPP_MESSAGE = encodeURIComponent(
    `Olá ${profile.name}, vi seu portfólio e gostaria de conversar!`
);

export default function ContactConversationSection() {
    return (
        <section>
            <h1 className="text-center mb-medium text-secondary">
                Vamos Conversar?
            </h1>
            <p className="text-center text-textSecondary text-medium leading-[1.6] mb-xxlarge px-large max-tablet:px-0 max-tablet:text-small">
                Estou sempre aberto a discutir novos projetos, desafios
                arquiteturais ou oportunidades de liderança e desenvolvimento.
                Sinta-se à vontade para entrar em contato através de um dos
                canais abaixo.
            </p>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-large mb-xxlarge">
                <ContactCard
                    href={`https://wa.me/5521998910884?text=${WHATSAPP_MESSAGE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<FaWhatsapp />}
                    iconColor="#25D366"
                    title="WhatsApp"
                    primaryLabel={profile.phone}
                    secondaryLabel="Me chame para um papo rápido"
                />
                <ContactCard
                    href={`mailto:${profile.email}`}
                    icon={<FaEnvelope />}
                    iconColor="#EA4335"
                    title="E-mail"
                    primaryLabel={profile.email}
                    secondaryLabel="Para assuntos mais formais"
                />
                <ContactCard
                    as="div"
                    style={{ cursor: "default" }}
                    icon={<FaMapMarkerAlt />}
                    iconColor="#0A74DA"
                    title="Localização"
                    primaryLabel={profile.location}
                    secondaryLabel="Disponível para atuação Remota"
                />
            </div>
        </section>
    );
}
