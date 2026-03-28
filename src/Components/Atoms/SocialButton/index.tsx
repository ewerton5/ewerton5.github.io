"use client";

import React from "react";

import * as S from "./styles";

type SocialButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
};

const SocialButton: React.FC<SocialButtonProps> = ({
    children,
    ...anchorProps
}) => <S.Link {...anchorProps}>{children}</S.Link>;

export default SocialButton;
