import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

  kit: {
    adapter: adapter({ pages: "docs" }),
    paths: { base: "/tf-pixi-sample" },
    alias: {
      "~": "src",
    },
    prerender: {
      default: true,
    },
  },
};

export default config;
