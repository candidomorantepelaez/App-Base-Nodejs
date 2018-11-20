const saveAppTests = require("./save-app");

module.exports = () => {
  describe("{ method: post, url: /app }: ", saveAppTests)
};