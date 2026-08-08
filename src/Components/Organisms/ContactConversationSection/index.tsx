import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

import ContactCard from "Components/Molecules/ContactCard";
import type { Profile } from "types/data";
import type { Dictionary } from "types/dictionary";

type ContactConversationSectionProps = {
    dict: Dictionary;
    profile: Profile;
};

export default function ContactConversationSection({
    dict,
    profile
}: ContactConversationSectionProps) {
    const whatsappMessage = encodeURIComponent(
        dict.contact.whatsapp.message.replace("{name}", profile.name)
    );

    return (
        <section>
            <h1 className="text-center mb-medium text-secondary">
                {dict.contact.title}
            </h1>
            <p className="text-center text-textSecondary text-medium leading-[1.6] mb-xxlarge px-large max-tablet:px-0 max-tablet:text-small">
                {dict.contact.description}
            </p>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-large mb-xxlarge">
                <ContactCard
                    href={`https://wa.me/5521998910884?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<FaWhatsapp />}
                    iconColor="#25D366"
                    title={dict.contact.whatsapp.title}
                    primaryLabel={profile.phone}
                    secondaryLabel={dict.contact.whatsapp.secondaryLabel}
                />
                <ContactCard
                    href={`mailto:${profile.email}`}
                    icon={<FaEnvelope />}
                    iconColor="#EA4335"
                    title={dict.contact.email.title}
                    primaryLabel={profile.email}
                    secondaryLabel={dict.contact.email.secondaryLabel}
                />
                <ContactCard
                    as="div"
                    style={{ cursor: "default" }}
                    icon={<FaMapMarkerAlt />}
                    iconColor="#0A74DA"
                    title={dict.contact.location.title}
                    primaryLabel={profile.location}
                    secondaryLabel={dict.contact.location.secondaryLabel}
                />
            </div>
        </section>
    );
}
