import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";

import ContactIconCircle from "Components/Atoms/ContactIconCircle";

type ContactCardBase = {
    icon: ReactNode;
    iconColor: string;
    title: string;
    primaryLabel: string;
    secondaryLabel: string;
};

export type ContactCardAsLink = ContactCardBase &
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> & {
        href: string;
    };

export type ContactCardAsStatic = ContactCardBase &
    Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
        as: "div";
    };

export type ContactCardProps = ContactCardAsLink | ContactCardAsStatic;

const baseClasses =
    "bg-white p-large rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex flex-col items-center text-center no-underline transition-all duration-300 ease-in-out";

const cardVariants = {
    div: baseClasses,
    link: `${baseClasses} hover:-translate-y-[5px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]`
} as const;

type BodyProps = Pick<
    ContactCardBase,
    "title" | "primaryLabel" | "secondaryLabel"
>;

const ContactCardBody = ({
    title,
    primaryLabel,
    secondaryLabel
}: BodyProps) => (
    <div>
        <h3 className="text-medium text-secondary mb-xsmall">{title}</h3>
        <p className="text-text font-medium text-small mb-xxsmall">
            {primaryLabel}
        </p>
        <span className="text-text-secondary text-xxsmall">
            {secondaryLabel}
        </span>
    </div>
);

const ContactCard = (props: ContactCardProps) => {
    const { icon, iconColor, title, primaryLabel, secondaryLabel } = props;

    const body = (
        <>
            <ContactIconCircle color={iconColor}>{icon}</ContactIconCircle>
            <ContactCardBody
                title={title}
                primaryLabel={primaryLabel}
                secondaryLabel={secondaryLabel}
            />
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
            <div className={cardVariants.div} {...divProps}>
                {body}
            </div>
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
        <a className={cardVariants.link} {...anchorProps}>
            {body}
        </a>
    );
};

export default ContactCard;
