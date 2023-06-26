import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vitest/config";
import dts from "vite-plugin-dts";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { UserConfigExport } from "vite";
import { name } from "./package.json";

const app = async (): Promise<UserConfigExport> => {
  return defineConfig({
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
      }),
      vanillaExtractPlugin(),
    ],

    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name,
        formats: ["es", "umd"],
        fileName: (format) => `${name}.${format}.js`,
      },
      rollupOptions: {
        external: ["react", "react-dom"],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
    },
  });
};
// https://vitejs.dev/config/
export default app;
