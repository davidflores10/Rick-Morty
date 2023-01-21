import { defineConfig } from "vitest/config";
import { mergeConfig } from "vite";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        include: ["src/**/*.ts", "src/**/*.vue"],
        exclude: ["src/__tests__/**"],
        reporter: ["lcov", "html", "text"],
      },
    },
  })
);
