import { vars } from "./theme.css.js";

export const unresponsiveProps = {
  minBlockSize: ["100vh"],
  userSelect: ["none"],
  cursor: ["default", "pointer"],
  boxShadow: vars.shadows,
  borderRadius: vars.radii,
} as const;

export const colorProps = {
  background: {
    primary: vars.color.primary.bg,
    neutral: vars.color.neutral.bg,
    highlight: vars.color.highlight.bg,
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
  fontSize: vars.fontSizes,
  flexWrap: ["wrap", "nowrap"],
  display: ["none", "block", "inline", "inline-block", "flex", "inline-flex"],
  flexDirection: ["row", "column", "row-reverse", "column-reverse"],
  justifyContent: ["flex-start", "center", "flex-end", "space-between"],
  alignItems: ["stretch", "flex-start", "center", "flex-end", "baseline"],
  paddingTop: vars.space,
  paddingBottom: vars.space,
  paddingLeft: vars.space,
  paddingRight: vars.space,
  marginTop: vars.space,
  marginBottom: vars.space,
  marginLeft: { ...vars.space, auto: "auto" },
  marginRight: { ...vars.space, auto: "auto" },
  gap: { ...vars.space, none: "none" },
} as const;
