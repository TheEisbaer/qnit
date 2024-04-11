import { defineConfig } from "cypress";

module.exports = defineConfig({
  env: {
    user: "superuser",
    password: "superuser",
  },

  e2e: {
    baseUrl: "https://demoauthor.magnolia-cms.com/travel/",
  },
});
