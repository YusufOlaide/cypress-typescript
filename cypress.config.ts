import { defineConfig } from "cypress";
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsBuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

export default defineConfig({
  defaultCommandTimeout: 10000,
  viewportWidth: 1536,
  viewportHeight: 960,
  chromeWebSecurity: false,
  retries: 2,
  reporter: 'mochawesome',
  env: {
    url: "https://www.perlego.com/",
  },
  e2e: {
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      const bundler = createBundler({
        plugins: [createEsBuildPlugin(config)],
      });
      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
  },
});
