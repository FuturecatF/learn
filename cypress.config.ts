import { defineConfig } from "cypress";
import webpackConfig from './webpack.config';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000/",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig
    },
  },
});
