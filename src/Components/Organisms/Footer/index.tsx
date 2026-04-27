import { FaGithub, FaLinkedin } from "react-icons/fa";

import profile from "data/profile.json";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-large">
            <div className="flex flex-col justify-center items-center max-w-[1120px] mx-auto px-small">
                <section className="w-full">
                    <div className="flex justify-between items-center w-full max-tablet:flex-col max-tablet:gap-small">
                        <small className="text-text-secondary text-xsmall">
                            Ewerton Vieira © {new Date().getFullYear()} Todos
                            os direitos reservados.
                        </small>
                        <div className="flex justify-between items-center gap-small">
                            <a
                                href={profile.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="text-secondary text-[1.5rem] transition-colors duration-200 hover:text-primary"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href={profile.linkedinUrl}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="text-secondary text-[1.5rem] transition-colors duration-200 hover:text-primary"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
};

export default Footer;
