import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

import ContactCard from "Components/Molecules/ContactCard";

const WHATSAPP_MESSAGE = encodeURIComponent(
    "Olá Ewerton, vi seu portfólio e gostaria de conversar!"
);

const ContactConversationSection = () => (
    <section>
        <h1 className="text-center mb-medium text-secondary">
            Vamos Conversar?
        </h1>
        <p className="text-center text-textSecondary text-medium leading-[1.6] mb-xxlarge px-large max-tablet:px-0 max-tablet:text-small">
            Estou sempre aberto a discutir novos projetos, desafios
            arquiteturais ou oportunidades de liderança e desenvolvimento.
            Sinta-se à vontade para entrar em contato através de um dos canais
            abaixo.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-large mb-xxlarge">
            <ContactCard
                href={`https://wa.me/5521998910884?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                icon={<FaWhatsapp />}
                iconColor="#25D366"
                title="WhatsApp"
                primaryLabel="+55 21 99891-0884"
                secondaryLabel="Me chame para um papo rápido"
            />
            <ContactCard
                href="mailto:ewerton.v50@gmail.com"
                icon={<FaEnvelope />}
                iconColor="#EA4335"
                title="E-mail"
                primaryLabel="ewerton.v50@gmail.com"
                secondaryLabel="Para assuntos mais formais"
            />
            <ContactCard
                as="div"
                style={{ cursor: "default" }}
                icon={<FaMapMarkerAlt />}
                iconColor="#0A74DA"
                title="Localização"
                primaryLabel="Belford Roxo - RJ, Brasil"
                secondaryLabel="Disponível para atuação Remota"
            />
        </div>
    </section>
);

export default ContactConversationSection;
