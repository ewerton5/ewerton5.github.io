import type { ReactNode } from "react";

type ContactIconCircleProps = {
    color: string;
    children: ReactNode;
};

const ContactIconCircle = ({ color, children }: ContactIconCircleProps) => (
    <div
        className="w-16 h-16 rounded-full flex items-center justify-center text-[32px] mb-medium"
        style={{ background: `${color}15`, color }}
    >
        {children}
    </div>
);

export default ContactIconCircle;
