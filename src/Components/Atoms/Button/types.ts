import type { ButtonHTMLAttributes } from "react";

export enum Sizes {
    SMALL,
    MEDIUM,
    LARGE
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    outline?: boolean;
    width?: string;
    height?: string;
    marginVertical?: string;
    marginHorizontal?: string;
    loading?: boolean;
    size?: keyof typeof Sizes;
    color?: string;
    rounded?: boolean;
    hierarchy?: "primary" | "secondary";
}

export type ContainerProps = Omit<ButtonProps, "loading">;
