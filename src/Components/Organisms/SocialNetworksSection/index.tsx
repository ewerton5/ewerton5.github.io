import { FaGithub, FaLinkedin } from "react-icons/fa";

import SocialButton from "Components/Atoms/SocialButton";

export default function SocialNetworksSection() {
    return (
        <section className="text-center border-t border-gray-200 pt-large">
            <h2 className="text-secondary mb-large">Minhas Redes</h2>
            <div className="flex justify-center gap-medium max-tablet:flex-col max-tablet:px-medium">
                <SocialButton
                    href="https://www.linkedin.com/in/ewerton-vieira-ab8b111ab"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin size={24} />
                    LinkedIn
                </SocialButton>
                <SocialButton
                    href="https://github.com/ewerton5"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub size={24} />
                    GitHub
                </SocialButton>
            </div>
        </section>
    );
}
