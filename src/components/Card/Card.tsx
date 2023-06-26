import { Box, type BoxProps } from "../Box";

const validElements = [
  "div",
  "article",
  "aside",
  "details",
  "main",
  "section",
] as const;

interface CardProps {
  children: BoxProps["children"];
  as?: (typeof validElements)[number];
  color?: "normal" | "highlight";
  // @ts-ignore
  elevation?: BoxProps["boxShadow"];
  fullWidth?: boolean;
  className?: BoxProps["className"];
}

export function Card({
  as = "div",
  color = "normal",
  elevation = "medium",
  fullWidth,
  ...props
}: CardProps) {
  return (
    <Box
      as={as}
      // @ts-ignore
      borderRadius="4x"
      padding="4x"
      width={fullWidth ? "full" : undefined}
      boxShadow={elevation}
      background={color === "normal" ? "primary" : "highlight"}
      {...props}
    />
  );
}
