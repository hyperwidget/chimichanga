import { createGlobalTheme } from "@vanilla-extract/css";
import { precomputeValues } from "@capsizecss/vanilla-extract";
import fontMetrics from "@capsizecss/metrics/inter";
import { mapValues } from "lodash";
import { tokens } from "./tokens.js";

const fontSizes = mapValues(tokens.fontSizes, (fontObj) =>
  precomputeValues({
    fontSize: fontObj.fontSize,
    leading: fontObj.lineHeight,
    fontMetrics,
  })
);

export const vars = createGlobalTheme(":root", { ...tokens, fontSizes });
