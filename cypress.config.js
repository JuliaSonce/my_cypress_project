const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  watchForFileChanges: false,
  failOnStatusCode: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: `https://guest:welcome2qauto@qauto2.forstudy.space`,
    env: {
      username: 'guest',
      password: 'welcome2qauto'
    },

    testIsolation: true


  },
});
