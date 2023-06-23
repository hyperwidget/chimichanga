import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { unresponsiveProps, responsiveProperties, colorProps } from "./props";

const unresponsiveAtomicProps = defineProperties({
  properties: unresponsiveProps,
});

const colorAtomicProps = defineProperties({
  properties: colorProps,
  defaultCondition: "lightMode",
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
});

const responsiveAtomicProps = defineProperties({
  properties: responsiveProperties,
  conditions: {
    sm: {},
    md: { "@media": `screen and ...` },
    lg: { "@media": `screen and ...` },
  },
  defaultCondition: "sm",
  responsiveArray: ["sm", "md", "lg"],
});

export const sprinkles = createSprinkles(
  unresponsiveAtomicProps,
  colorAtomicProps,
  responsiveAtomicProps
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
