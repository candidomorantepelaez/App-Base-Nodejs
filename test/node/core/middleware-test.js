const middlewareManager = require("./../../../node/core/middleware-manager");
const test = require("./../../helpers/basic-test-helper");

module.exports = () => {
  it("export middlewareManager: ", function() {
    test.expect(middlewareManager).to.be.a("object");
  });

  it("middlewareManager.withBasicMiddlewareAction exist: ", function() {
    test.expect(middlewareManager).to.have.property("withBasicMiddlewareAction");
  });

  it("middlewareManager.withBasicMiddlewareAction Rocks: ", function() {
    const obj = middlewareManager.withBasicMiddlewareAction({});
    test.expect(obj).to.be.a("object");
    test.expect(obj).to.have.property("preAuthenticate");
    test.expect(obj.preAuthenticate).to.be.a("function");
    test.expect(obj).to.have.property("postExecute");
    test.expect(obj.postExecute).to.be.a("function");
  });

};