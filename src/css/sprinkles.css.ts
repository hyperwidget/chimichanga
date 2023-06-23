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
    md: { "@media": `screen and (max-width: 768px)` },
    lg: { "@media": `screen and (max-width: 992px)` },
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
