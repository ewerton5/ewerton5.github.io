import React from "react";

import profile from "data/profile.json";

import { Image } from "./styles";

interface LogoProps {
    margin?: boolean;
}

const Logo: React.FC<LogoProps> = (LogoProps) => {
    return (
        <Image
            src={profile.profilePicture}
            margin={!LogoProps.margin}
            alt="Ewerton Vieira"
        />
    );
};

export default Logo;
