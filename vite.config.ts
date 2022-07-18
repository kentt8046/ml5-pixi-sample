import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { viteExternalsPlugin } from "vite-plugin-externals";

export default defineConfig({
  plugins: [
    sveltekit(),
    viteExternalsPlugin({
      "@tensorflow-models/body-segmentation": "bodySegmentation",
      "@tensorflow-models/face-detection": "faceDetection",
    }),
  ],
  ssr: {
    noExternal: ["pixi.js"],
  },
});
