import type { ReactNode } from "react";

import ThemeManager from "./ThemeManager";

import "styles/rc-image.css";

interface ProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
    return <ThemeManager>{children}</ThemeManager>;
};

export default Providers;
