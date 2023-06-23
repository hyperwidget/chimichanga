import React from "react";

import { Box } from "../Box";
import type { BoxProps } from "../Box";
import {
  mapResponsiveAtomicProps,
  type ResponsiveAtomicProps,
} from "../../css/sprinkles.css";

const validElements = ["div", "ul", "ol"] as const;

const directionToFlexDirection = {
  vertical: "column",
  horizontal: "row",
} as const;

const alignToAlignItems = {
  stretch: "stretch",
  start: "flex-start",
  end: "flex-end",
  center: "center",
  baseline: "baseline",
} as const;

const justifyToJustifyContent = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
} as const;

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

export function Stack({
  as = "div",
  direction = "vertical",
  space = "2x",
  align = "stretch",
  justify = "start",
  wrap = false,
  reverse = false,
  ...props
}: StackProps) {
  return (
    <Box
      as={as}
      display="flex"
      flexDirection={mapResponsiveAtomicProps(direction, (value) => {
        const flexDirection = directionToFlexDirection[value];
        return reverse ? `${flexDirection}-reverse` : flexDirection;
      })}
      gap={space}
      alignItems={mapResponsiveAtomicProps(
        align,
        (value) => alignToAlignItems[value]
      )}
      justifyContent={mapResponsiveAtomicProps(
        justify,
        (value) => justifyToJustifyContent[value]
      )}
      flexWrap={wrap ? "wrap" : undefined}
      {...props}
    />
  );
}
