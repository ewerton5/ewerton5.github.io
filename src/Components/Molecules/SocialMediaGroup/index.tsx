import { FaGithub, FaLinkedin } from "react-icons/fa";

import SocialLink from "Components/Atoms/SocialLink";
import type { Profile } from "types/data";

type SocialMediaGroupProps = {
    profile: Profile;
};

export default function SocialMediaGroup({ profile }: SocialMediaGroupProps) {
    return (
        <>
            <SocialLink
                href={profile.githubUrl}
                icon={<FaGithub />}
                ariaLabel="GitHub"
            />
            <SocialLink
                href={profile.linkedinUrl}
                icon={<FaLinkedin />}
                ariaLabel="LinkedIn"
            />
        </>
    );
}
