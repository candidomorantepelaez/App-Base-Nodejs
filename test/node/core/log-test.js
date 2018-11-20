const loggerManager = require("./../../../node/core/log-manager");
const test = require("./../../helpers/basic-test-helper");

module.exports = () => {
  it("export loggerManager: ", function() {
    test.expect(loggerManager).to.be.a("object");
  });

  it("loggerManager.log() is a function: ", function() {
    test.expect(loggerManager.log).to.be.a("function");
  });
};