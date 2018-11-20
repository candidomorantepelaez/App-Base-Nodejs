const httpManager = require("./../../../node/core/http-manager");
const test = require("./../../helpers/basic-test-helper");
const MockExpressResponse = require('mock-express-response');
const MockExpressRequest = require('mock-express-request');

module.exports = () => {
  it("export httpManager: ", function() {
    test.expect(httpManager).to.be.a("object");
  });

  it("export httpManager.getCors: ", function() {
    test.expect(httpManager.getCors).to.be.a("function");
  });

  it("httpManager.getCors rocks: ", function() {
    const request = new MockExpressRequest();
    const response = new MockExpressResponse();
    const next = (req, res, next) => res;
    httpManager.getCors(request, response, next);
    test.expect(response.get("Access-Control-Allow-Origin")).to.be.equal("http://localhost:3000");
  });

};
