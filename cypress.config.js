const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  reporter: 'cypress-mochawesome-reporter',
  watchForFileChanges: false,
  failOnStatusCode: false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: `https://guest:welcome2qauto@qauto2.forstudy.space`,
    env: {
      username: 'guest',
      password: 'welcome2qauto'
    },

    testIsolation: true,
    specPattern: "cypress/e2e/**/*.{spec,cy}.js"
  },
});
