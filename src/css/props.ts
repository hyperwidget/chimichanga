import { vars } from "./theme.css";

export const unresponsiveProps = {
  minBlockSize: ["100vh"],
  userSelect: ["none"],
  cursor: ["default", "pointer"],
} as const;

export const colorProps = {
  background: {
    primary: vars.color.primary.bg,
    neutral: vars.color.neutral.bg,
  },
  color: {
    primary: vars.color.primary.text,
    neutral: vars.color.neutral.text,
  },
} as const;

export const responsiveProperties = {
  margin: vars.size,
  padding: vars.size,
  alignItems: ["start", "center", "end"],
} as const;
