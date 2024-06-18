// import { defineConfig } from "rollup";
// import typescript from "@rollup/plugin-typescript";

// export default defineConfig({
//   input: "src/index.ts",
//   output: {
//     dir: "dist",
//     format: "es",
//     name: "react-smooth-tabs ",
//   },
//   external: ["react", "react-dom"],
//   plugins: [
//     typescript({
//       tsconfig: "tsconfig.json",
//     }),
//   ],
// });

// rollup.config.js
import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "es",
    name: "react-smooth-tabs ",
  },
  external: ["react", "react-dom"],
  plugins: [
    typescript({
      tsconfig: "tsconfig.json",
    }),
    postcss({
      plugins: [],
      config: "./postcss.config.cjs",
      extract: true,
      minimize: true,
      sourceMap: true,
      extensions: [".css"],
    }),
  ],
});

