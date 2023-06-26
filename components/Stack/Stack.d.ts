import { type BoxProps } from "../Box";
import { type ResponsiveAtomicProps } from "../../css/sprinkles.css";
declare const validElements: readonly ["div", "ul", "ol"];
declare const directionToFlexDirection: {
    readonly vertical: "column";
    readonly horizontal: "row";
};
declare const alignToAlignItems: {
    readonly stretch: "stretch";
    readonly start: "flex-start";
    readonly end: "flex-end";
    readonly center: "center";
    readonly baseline: "baseline";
};
declare const justifyToJustifyContent: {
    readonly start: "flex-start";
    readonly end: "flex-end";
    readonly center: "center";
    readonly between: "space-between";
};
export interface StackProps {
    children: BoxProps["children"];
    as?: (typeof validElements)[number];
    direction?: ResponsiveAtomicProps<keyof typeof directionToFlexDirection>;
    space?: BoxProps["gap"];
    align?: ResponsiveAtomicProps<keyof typeof alignToAlignItems>;
    justify?: ResponsiveAtomicProps<keyof typeof justifyToJustifyContent>;
    wrap?: boolean;
    reverse?: boolean;
    className?: BoxProps["className"];
}
export declare function Stack({ as, direction, space, align, justify, wrap, reverse, ...props }: StackProps): import("react/jsx-runtime").JSX.Element;
export {};
