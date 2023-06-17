import { defineConfig } from "cypress";

export default defineConfig({
  // These settings apply everywhere unless overridden
  defaultCommandTimeout: 5000,

  viewportWidth: 1000,
  viewportHeight: 600,
  
  // Command timeout overridden for E2E tests
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "http://localhost:5000",
    supportFile: false,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    supportFile: false,
  },
});
