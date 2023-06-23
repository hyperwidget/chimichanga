import { style } from "@vanilla-extract/css";

export const baseReset = style({
  margin: 0,
  padding: 0,
  border: 0,
  boxSizing: "border-box",
  // ...
});

const list = style({
  listStyle: "none",
});

const a = style({
  textDecoration: "none",
  color: "inherit",
});

type Resets = Partial<Record<keyof JSX.IntrinsicElements, string>>;

export const elementResets: Resets = {
  ul: list,
  ol: list,
  a,
  // ...
};
