const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  reporter: 'cypress-mochawesome-reporter',
  watchForFileChanges: false,
  failOnStatusCode: false,
  e2e: {
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on);
    },
    // specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',

    baseUrl: `https://qauto2.forstudy.space/`,

    env: {
      baseUrl: `https://guest:welcome2qauto@qauto2.forstudy.space/`,
    },

    // env: {
    //   username: 'guest',
    //   password: 'welcome2qauto'
    // },

    testIsolation: true,
    specPattern: "cypress/e2e/**/*.{spec,cy}.js"
  },
});
