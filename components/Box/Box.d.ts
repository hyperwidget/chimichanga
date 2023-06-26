import { ClassValue } from "clsx";
import { type Atoms } from "../../css/atoms";
type HTMLProperties = Omit<React.AllHTMLAttributes<HTMLElement>, "as" | "className" | "color" | "height" | "width">;
export type BoxProps = Atoms & HTMLProperties & {
    as?: React.ElementType;
    className?: ClassValue;
};
export declare const Box: import("react").ForwardRefExoticComponent<Atoms & HTMLProperties & {
    as?: import("react").ElementType<any> | undefined;
    className?: ClassValue;
} & import("react").RefAttributes<HTMLElement>>;
export {};
