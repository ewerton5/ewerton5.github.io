import { shade, transparentize } from "polished";
import styled, { css, keyframes } from "styled-components";

//
import type { ContainerProps } from "./types";

const rotateInfinite = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

type StyledContainerProps = {
    $outline?: boolean;
    $width?: string;
    $height?: string;
    $marginHorizontal?: string;
    $marginVertical?: string;
    $size?: ContainerProps["size"];
    $color?: string;
    $rounded?: boolean;
    $hierarchy?: ContainerProps["hierarchy"];
} & Pick<ContainerProps, "disabled">;

const SolidButton = css<StyledContainerProps>`
    background: ${({ theme, $color }) => $color ?? theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: none;

    svg {
        color: ${({ theme }) => theme.colors.white};
    }

    &:hover {
        background: ${({ theme, $color }) =>
            $color ? shade(0.2, $color) : shade(0.2, theme.colors.primary)};
    }

    ${({ disabled, theme }) =>
        disabled &&
        css`
            background: ${theme.colors.gray[200]};
            color: ${theme.colors.gray[500]};
            cursor: not-allowed;

            &:hover {
                background: ${theme.colors.gray[200]};
            }
        `}
`;

const OutlineButton = css<StyledContainerProps>`
    border: ${({ theme, $color }) =>
        $color ? `2px solid ${$color}` : `2px solid ${theme.colors.primary}`};
    color: ${({ theme, $color }) => $color ?? theme.colors.primary};
    background: transparent;

    svg {
        color: ${({ theme, $color }) => $color ?? theme.colors.primary};
    }

    &:hover {
        background: ${({ theme, $color }) =>
            $color
                ? transparentize(0.9, $color)
                : transparentize(0.9, theme.colors.primary)};
    }

    ${({ disabled, theme }) =>
        disabled &&
        css`
            background: ${theme.colors.gray[100]};
            color: ${theme.colors.gray[400]};
            border: ${({ theme }) => `2px solid ${theme.colors.gray[300]}`};
            cursor: not-allowed;

            &:hover {
                background: ${theme.colors.gray[100]};
            }
            svg {
                color: ${theme.colors.gray[400]};
            }
        `}
`;

export const WrapperLoadgin = styled.div`
    svg {
        animation: 1s ${rotateInfinite} ease-out infinite;
    }
`;

export const Container = styled.button<StyledContainerProps>`
    ${({ $outline }) => ($outline ? OutlineButton : SolidButton)};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacings.xsmall};
    height: ${({ $height }) => $height ?? "4.4rem"};
    width: ${({ $width }) => $width ?? "100%"};
    border-radius: ${({ $rounded }) => ($rounded ? "50px" : "8px")};
    font-weight: ${({ theme }) => theme.fonts.weight.medium};

    font-size: ${({ theme, $size }) => {
        switch ($size ?? "MEDIUM") {
            case "SMALL":
                return theme.fonts.size.xsmall;
            case "MEDIUM":
                return theme.fonts.size.small;
            case "LARGE":
                return theme.fonts.size.medium;
            default:
                return theme.fonts.size.small;
        }
    }};
    outline: none;
    padding: 0 ${({ theme }) => theme.spacings.small};
    margin-top: ${({ $marginVertical }) => $marginVertical ?? "0"};
    margin-bottom: ${({ $marginVertical }) => $marginVertical ?? "0"};
    margin-left: ${({ $marginHorizontal }) => $marginHorizontal ?? "0"};
    margin-right: ${({ $marginHorizontal }) => $marginHorizontal ?? "0"};
    transition: all 0.2s;

    &:disabled {
        transform: scale(1);
    }

    &:active {
        ${({ disabled }) =>
            !disabled &&
            css`
                transform: scale(0.98);
            `}
    }
`;
