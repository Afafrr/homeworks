// jest.config.cjs
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    "^.+\\.(css|less|scss|sass)$": "jest-transform-stub",
    "^.+\\.(png|jpg|jpeg|gif|webp|svg)$": "jest-transform-stub",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(png|jpg|jpeg|gif|webp|svg)$": "jest-transform-stub",
  },
  setupFilesAfterEnv: ["./src/setupTest.js"],
};
