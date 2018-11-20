const test = require("./../../helpers/basic-test-helper");
const configs = include("node/config");

module.exports = () => {
  it("export config: ", function() {
    test.expect(configs).to.be.a("object");
  });

  it("config.development: ", function() {
    test.expect(configs).to.have.property("development");
  });

  it("config.development.app : ", function() {
    test.expect(configs.development).to.have.property("app");
  });

  it("config.development.app.profile: ", function() {
    test.expect(configs.development.app.profile).to.equal("development");
  });

  it("config.test: ", function() {
    test.expect(configs).to.have.property("test");
  });

  it("config.test.app : ", function() {
    test.expect(configs.test).to.have.property("app");
  });

  it("config.test.app.profile: ", function() {
    test.expect(configs.test.app.profile).to.equal("test");
  });
}