import { ClassValue } from "clsx";
import { type Atoms } from "../../css/atoms";
import React from "react";
type HTMLProperties = Omit<React.AllHTMLAttributes<HTMLElement>, "as" | "className" | "color" | "height" | "width">;
export type BoxProps = Atoms & HTMLProperties & {
    as?: React.ElementType;
    className?: ClassValue;
};
export declare const Box: React.ForwardRefExoticComponent<Atoms & HTMLProperties & {
    as?: React.ElementType;
    className?: ClassValue;
} & React.RefAttributes<HTMLElement>>;
export {};
