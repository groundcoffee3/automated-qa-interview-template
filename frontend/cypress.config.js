const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/index.js',
    fixturesFolder: 'cypress/fixtures',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
