import type { ReactNode } from "react";

import ThemeManager from "./ThemeManager";

import "styles/rc-image.css";

interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return <ThemeManager>{children}</ThemeManager>;
}
