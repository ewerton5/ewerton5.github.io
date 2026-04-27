import type { ReactNode } from "react";

type SectionTitleProps = {
    children: ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => (
    <h2 className="text-center text-xlarge text-secondary mb-xlarge relative after:content-[''] after:block after:w-[60px] after:h-[4px] after:bg-primary after:mx-auto after:mt-small after:rounded-[2px] max-tablet:text-large">
        {children}
    </h2>
);

export default SectionTitle;
