const typescript = require("rollup-plugin-typescript2");
const commonjs = require("@rollup/plugin-commonjs");

module.exports = {
  input: "./src/seeder/seeder.ts",
  output: {
    file: "./dist/seeder.js",
    format: "cjs",
  },
  plugins: [
    typescript({
      typescript: require("typescript"),
      tsconfig: "tsconfig.seeder.json",
    }),
    commonjs({
      include: "node_modules/**",
      sourceMap: false,
    }),
  ],
  external: ["@faker-js/faker"],
};
