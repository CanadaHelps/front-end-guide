module.exports = {
  setupFiles: ["./jest.setup.js"],
  setupFilesAfterEnv: ["react-testing-library/cleanup-after-each"],
  collectCoverageFrom: ["src/**/*.(ts|tsx|js|jsx)"],
  coverageReporters: ["json", "html", "lcov"],
  coveragePathIgnorePatterns: ["messages.js", "messages/index.js"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  reporters: ["default", "jest-junit"],
  testMatch: ["**/__tests__/*.+(ts|tsx|js|jsx)", "**/*.test.+(ts|tsx|js|jsx)"],
  transform: {
    "\\.(js|jsx|ts|tsx$)": "./jest.transform.js"
  }
};
