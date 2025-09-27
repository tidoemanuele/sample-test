import type { Config } from "jest"

const config: Config = {
  testEnvironment: "jsdom",
  showSeed: true,
  transform: {
    "\\.[j]sx?$": "babel-jest",
    "\\.[t]sx?$": "ts-jest",
  },
  // Skip corrupted functionality tests on challenge branches
  // These tests fail due to intentional corruptions that students will fix
  testPathIgnorePatterns: [
    "/node_modules/",
    // Re-enable formation challenge tests so CI shows proper failure status
    // Students will see RED CI until they fix the corruptions
  ],
  // Mark specific test patterns to skip on challenge branches
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
}

export default config
