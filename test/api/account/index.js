const loginTest = require("./login");

module.exports = () => {
  describe("{ method: post, url: /credentials }: ", loginTest);
};