import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import * as tsConfig from "./tsconfig.json";
import * as path from "path";

export default defineConfig({
  build: {
    outDir: "docs",
  },
  plugins: [sveltekit()],
  resolve: {
    alias: tsAlias(),
  },
});

function tsAlias() {
  const { paths } = tsConfig.compilerOptions;

  return Object.fromEntries(
    Object.entries(paths).map(([alias, [realPath]]) => {
      return [
        alias.replace(/\*+$/, ""),
        path.join(__dirname, realPath.replace(/\*+$/, "")),
      ];
    })
  );
}
