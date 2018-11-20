const routesManager = require("./../../../node/core/routes-manager");
const test = require("./../../helpers/basic-test-helper");
const MockExpressResponse = require('mock-express-response');
const MockExpressRequest = require('mock-express-request');
const middlewareManager = include("node/core/middleware-manager");

module.exports = () => {
  it("export routesManager: ", function() {
    test.expect(routesManager).to.be.a("object");
  });

  it("export routesManager is correct: ", function() {
    test.expect(routesManager).to.have.property("handler404");
    test.expect(routesManager).to.have.property("createRouter");
  });

  it("export routesManager.handler404 rocks: ", function() {
    const request = new MockExpressRequest();
    const response = new MockExpressResponse();
    const next = (req, res, next) => res;
    routesManager.handler404(request, response, next);
    test.expect(response.statusCode).to.be.equal(404);
  });

  it("export routesManager.createRouter rocks: ", function() {
    const request = new MockExpressRequest({
        method: "GET",
        url: "/test",
    });
    const customRoutes = [
      {
        url: "/test",
        method: "get",
        action: middlewareManager.withBasicMiddlewareAction({}),
      },
    ];
    const response = new MockExpressResponse();
    const next = (req, res, next) => res;
    const router = routesManager.createRouter(customRoutes);
    router(request, response, next);
    test.expect(response.statusCode).to.be.equal(200);
    test.expect(response._getJSON()).to.have.property("message");
  });

  it("export routesManager.createRouter withCustomRoutes rocks: ", function() {
    const request = new MockExpressRequest({
        method: "GET",
        url: "/test",
    });
    const customRoutes = [];
    const response = new MockExpressResponse();
    const next = (req, res, next) => res;
    const router = routesManager.createRouter(customRoutes);
    router(request, response, next);
    test.expect(response.statusCode).to.be.equal(200);
    test.expect(response._getJSON()).to.have.property("message");
  });
};