import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import profile from "data/profile.json";

import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialIcons,
    SocialIconLink,
    WebsiteRights
} from "./styles";

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <WebsiteRights>
                            Ewerton Vieira © {new Date().getFullYear()} Todos
                            os direitos reservados.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href={profile.githubUrl}
                                target="_blank"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink
                                href={profile.linkedinUrl}
                                target="_blank"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
