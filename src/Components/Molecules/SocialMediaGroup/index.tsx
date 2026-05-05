import { FaGithub, FaLinkedin } from "react-icons/fa";

import SocialLink from "Components/Atoms/SocialLink";
import profile from "data/profile.json";

export default function SocialMediaGroup() {
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
