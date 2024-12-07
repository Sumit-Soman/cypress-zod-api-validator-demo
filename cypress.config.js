import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3003',
    supportFile: 'cypress/support/e2e.js',
    defaultCommandTimeout: 10000,
  },
});

