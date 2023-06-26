import { type BoxProps } from "../Box";
declare const validElements: readonly ["div", "article", "aside", "details", "main", "section"];
interface CardProps {
    children: BoxProps["children"];
    as?: (typeof validElements)[number];
    color?: "normal" | "highlight";
    elevation?: BoxProps["boxShadow"];
    fullWidth?: boolean;
    className?: BoxProps["className"];
}
export declare function Card({ as, color, elevation, fullWidth, ...props }: CardProps): import("react/jsx-runtime").JSX.Element;
export {};
