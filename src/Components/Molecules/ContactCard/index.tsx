"use client";

import React from "react";

import ContactIconCircle from "Components/Atoms/ContactIconCircle";

import * as S from "./styles";

type ContactCardBase = {
    icon: React.ReactNode;
    iconColor: string;
    title: string;
    primaryLabel: string;
    secondaryLabel: string;
};

export type ContactCardAsLink = ContactCardBase &
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
        href: string;
    };

export type ContactCardAsStatic = ContactCardBase &
    Omit<React.HTMLAttributes<HTMLDivElement>, "children"> & {
        as: "div";
    };

export type ContactCardProps = ContactCardAsLink | ContactCardAsStatic;

const ContactCard: React.FC<ContactCardProps> = (props) => {
    const { icon, iconColor, title, primaryLabel, secondaryLabel } = props;

    const body = (
        <>
            <ContactIconCircle color={iconColor}>{icon}</ContactIconCircle>
            <S.Body>
                <h3>{title}</h3>
                <p>{primaryLabel}</p>
                <span>{secondaryLabel}</span>
            </S.Body>
        </>
    );

    if ("as" in props && props.as === "div") {
        const {
            as: _as,
            icon: _i,
            iconColor: _c,
            title: _t,
            primaryLabel: _p,
            secondaryLabel: _s,
            ...divProps
        } = props;
        return (
            <S.Card as="div" {...divProps}>
                {body}
            </S.Card>
        );
    }

    const {
        icon: _i,
        iconColor: _c,
        title: _t,
        primaryLabel: _p,
        secondaryLabel: _s,
        ...anchorProps
    } = props as ContactCardAsLink;

    return (
        <S.Card as="a" {...anchorProps}>
            {body}
        </S.Card>
    );
};

export default ContactCard;
