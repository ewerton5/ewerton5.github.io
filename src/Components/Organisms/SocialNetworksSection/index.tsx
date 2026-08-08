import { FaGithub, FaLinkedin } from "react-icons/fa";

import SocialButton from "Components/Atoms/SocialButton";
import type { Profile } from "types/data";
import type { Dictionary } from "types/dictionary";

type SocialNetworksSectionProps = {
    dict: Dictionary;
    profile: Profile;
};

export default function SocialNetworksSection({
    dict,
    profile
}: SocialNetworksSectionProps) {
    return (
        <section className="text-center border-t border-gray-200 pt-large">
            <h2 className="text-secondary mb-large">
                {dict.socialNetworks.title}
            </h2>
            <div className="flex justify-center gap-medium max-tablet:flex-col max-tablet:px-medium">
                <SocialButton
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin size={24} />
                    {dict.socialNetworks.linkedin}
                </SocialButton>
                <SocialButton
                    href={profile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub size={24} />
                    {dict.socialNetworks.github}
                </SocialButton>
            </div>
        </section>
    );
}
