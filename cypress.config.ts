import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    chromeWebSecurity: false,
    experimentalSessionSupport: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
