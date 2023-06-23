import { forwardRef } from "react";
import { ClassValue } from "clsx";
import { extractAtoms, atoms, type Atoms } from "../../css/atoms";
import { type Sprinkles } from "../../css/sprinkles.css";
import React from "react";

type HTMLProperties = Omit<
  React.AllHTMLAttributes<HTMLElement>,
  "as" | "className" | "color" | "height" | "width"
>;

export type BoxProps = Atoms &
  HTMLProperties & {
    as?: React.ElementType;
    className?: ClassValue;
  };

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ as = "div", ...other }, ref) => {
    const Component = as;

    const [atomsProps, propsToForward] = extractAtoms(other);

    const className = atoms({
      className: propsToForward.className,
      reset: typeof Component === "string" ? Component : "div",
      ...atomsProps,
    });

    return <Component {...propsToForward} className={className} ref={ref} />;
  }
);
