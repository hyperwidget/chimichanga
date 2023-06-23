import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts(), react(), vanillaExtractPlugin()],
  build: {
    lib: {
      entry: resolve("src/index.js"),
      name: "Chimichanga Components",
      fileName: (format) => `chimichanga-components.${format}.js`,
    },
  },
});
