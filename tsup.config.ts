import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], 
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: true,
  target: "esnext",
  injectStyle: true, // THIS makes styles auto-inject
  splitting: false,
});
