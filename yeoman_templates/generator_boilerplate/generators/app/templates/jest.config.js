/* eslint-disable @typescript-eslint/no-var-requires */
const defaultConfig = require("@canadahelps/ui-common-config/test/jest.config");

const config = defaultConfig({
  setupFiles: ["./jest.setup.js", "./node_modules/@canadahelps/ui-common-config/test/jest.setup.js"],
  transformFile: "babel-jest",
});

module.exports = {
  ...config,
  moduleDirectories: ["node_modules", "src"],
  roots: ["<rootDir>/src"],
  transformIgnorePatterns: ["<rootDir/node_modules/@canadahelps/chutils"],
};
