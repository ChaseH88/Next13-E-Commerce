const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.@(tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs",
    "@geometricpanda/storybook-addon-badges",
    "storybook-addon-styled-component-theme/dist/preset",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, "../src/components"),
      hooks: path.resolve(__dirname, "../src/hooks"),
      styles: path.resolve(__dirname, "../src/styles"),
    };
    return config;
  },
};
