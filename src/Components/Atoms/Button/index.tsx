"use client";

import type { CSSProperties } from "react";
import { VscLoading } from "react-icons/vsc";

import { cn } from "utils/cn";

import type { ButtonProps } from "./types";

const sizeVariants = {
    SMALL: "text-xsmall",
    MEDIUM: "text-small",
    LARGE: "text-medium"
} as const;

const appearanceVariants = {
    "solid-default":
        "bg-primary text-white hover:brightness-[0.75] disabled:bg-gray-200 disabled:text-gray-500",
    "solid-custom":
        "text-white hover:brightness-[0.75] disabled:bg-gray-200 disabled:text-gray-500",
    "outline-default":
        "border-2 border-primary text-primary bg-transparent hover:bg-primary/10 disabled:border-gray-300 disabled:bg-gray-100 disabled:text-gray-400",
    "outline-custom":
        "border-2 bg-transparent hover:bg-black/10 disabled:bg-gray-100 disabled:text-gray-400"
} as const;

export default function Button({
    children,
    outline,
    width,
    height,
    loading,
    marginHorizontal,
    marginVertical,
    size = "MEDIUM",
    color,
    rounded,
    disabled,
    hierarchy = "primary",
    style,
    ...rest
}: ButtonProps) {
    const isOutline = outline || hierarchy === "secondary";
    const appearance =
        `${isOutline ? "outline" : "solid"}-${color ? "custom" : "default"}` as keyof typeof appearanceVariants;

    const customStyle: CSSProperties = {
        ...(width ? { width } : {}),
        ...(height ? { height } : {}),
        ...(marginVertical
            ? { marginTop: marginVertical, marginBottom: marginVertical }
            : {}),
        ...(marginHorizontal
            ? { marginLeft: marginHorizontal, marginRight: marginHorizontal }
            : {}),
        ...(isOutline && color ? { borderColor: color, color } : {}),
        ...(!isOutline && color ? { backgroundColor: color } : {}),
        ...style
    };

    return (
        <button
            type="button"
            disabled={disabled}
            style={customStyle}
            className={cn(
                "flex items-center justify-center gap-xsmall font-medium outline-none transition-all duration-200 px-small cursor-pointer active:scale-[0.98] disabled:cursor-not-allowed",
                !height && "h-[44px]",
                !width && "w-full",
                rounded ? "rounded-[50px]" : "rounded-[8px]",
                sizeVariants[size],
                appearanceVariants[appearance]
            )}
            {...rest}
        >
            {loading ? (
                <span className="inline-flex animate-spin">
                    <VscLoading size={30} />
                </span>
            ) : (
                children
            )}
        </button>
    );
}
