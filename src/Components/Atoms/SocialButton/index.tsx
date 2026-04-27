import type { AnchorHTMLAttributes, ReactNode } from "react";

type SocialButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
};

const SocialButton = ({ children, ...anchorProps }: SocialButtonProps) => (
    <a
        className="flex items-center justify-center gap-small bg-gray-50 text-secondary px-large py-small rounded-[8px] font-medium no-underline transition-[background,color] duration-200 border border-gray-200 hover:bg-primary hover:text-white hover:border-primary max-tablet:w-full"
        {...anchorProps}
    >
        {children}
    </a>
);

export default SocialButton;
