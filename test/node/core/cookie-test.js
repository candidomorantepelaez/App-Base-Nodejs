const test = require("./../../helpers/basic-test-helper");
const cookiesManager = include("node/core/cookie-manager");
const MockExpressResponse = require('mock-express-response');
const MockExpressRequest = require('mock-express-request');

module.exports = () => {
  it("export cookiesManager: ", function() {
    test.expect(cookiesManager).to.be.a("object");
  });

  it("cookiesManager.setCookie exist: ", function() {
    test.expect(cookiesManager).to.have.property("setCookie");
  });

  it("cookiesManager.setCookie is a function: ", function() {
    test.expect(cookiesManager.setCookie).to.be.a("function");
  });

  it("cookiesManager.setCookie rocks: ", function() {
    const response = new MockExpressResponse();
    cookiesManager.setCookie(response, "test", "123");
    test.expect(response.get("Set-Cookie")).to.be.a("string");
    test.expect(response.get("set-cookie")).to.be.equal("test=123; Domain=ari; Path=/");
  });

  it("cookiesManager.clearCookie exist: ", function() {
    test.expect(cookiesManager).to.have.property("clearCookie");
  });

  it("cookiesManager.clearCookie is a function: ", function() {
    test.expect(cookiesManager.clearCookie).to.be.a("function");
  });

  it("cookiesManager.clearCookie rocks: ", function() {
    const response = new MockExpressResponse();
    cookiesManager.clearCookie(response, "test");
    test.expect(response.get("set-Cookie")).to.be.equal("test=; Domain=ari; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT");
  });

  it("cookiesManager.getCookie exist: ", function() {
    test.expect(cookiesManager).to.have.property("getCookie");
  });

  it("cookiesManager.getCookie is a function: ", function() {
    test.expect(cookiesManager.getCookie).to.be.a("function");
  });

  it("cookiesManager.getCookie rocks: ", function() {
    const request = new MockExpressRequest();
    const cookie = cookiesManager.getCookie(request, "test");
    test.expect(cookie).to.be.a("null");
    const request2 = new MockExpressRequest({
      cookies: {
        "test": "123",
      },
    });
    const cookie2 = cookiesManager.getCookie(request2, "test");
    test.expect(cookie2).to.be.equal("123");
  });
};