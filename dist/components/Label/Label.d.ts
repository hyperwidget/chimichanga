import { type BoxProps } from "../Box";
interface LabelProps {
    children: BoxProps["children"];
    className?: BoxProps["className"];
}
export declare const Label: ({ children, ...props }: LabelProps) => import("react/jsx-runtime").JSX.Element;
export {};
