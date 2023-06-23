import { vars } from "./theme.css";

export const unresponsiveProps = {
  minBlockSize: ["100vh"],
  userSelect: ["none"],
  cursor: ["default", "pointer"],
  boxShadow: vars.shadows,
  borderRadius: vars.radii,

  gap: { ...vars.space, none: "none" },
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
  margin: vars.space,
  padding: vars.space,
  width: vars.size,
  flexWrap: ["wrap", "nowrap"],
  display: ["none", "block", "inline", "inline-block", "flex", "inline-flex"],
  flexDirection: ["row", "column", "row-reverse", "column-reverse"],
  justifyContent: ["flex-start", "center", "flex-end", "space-between"],
  alignItems: ["stretch", "flex-start", "center", "flex-end", "baseline"],
} as const;
