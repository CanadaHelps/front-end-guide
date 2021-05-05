module.exports = {
  extends: ["./node_modules/@canadahelps/ui-common-config/format/eslint-config-canadahelps.js"],
  ignorePatterns: ["**/__tests__/**/*", "**/__mocks__/**/*", "**/__stories__/**/*", "**/*.scss"],
  rules: {
    // Project-specific overrides go here
  },
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  root: true,
};
