module.exports = {
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.js"],
  moduleFileExtensions: ["js", "jsx", "mjs", "ts", "tsx"],
  modulePathIgnorePatterns: ["./node_modules/"],
  moduleNameMapper: {
    "\\.(css|pcss|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/test/fileMock.js",
    "\\.svg": "<rootDir>/test/svgrMock.js",
  },
  testEnvironment: "jsdom",
  testMatch: ["**/(*.)test.{js,jsx,mjs,ts,tsx}"],
  testPathIgnorePatterns: ["./node_modules/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx|mjs)$": ["babel-jest", { presets: ["next/babel"] }],
  },
};
