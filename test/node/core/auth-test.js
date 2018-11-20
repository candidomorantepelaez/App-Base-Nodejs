const test = require("./../../helpers/basic-test-helper");
const authManager = include("node/core/auth-manager");

module.exports = () => {
  it("export authManager: ", function() {
    test.expect(authManager).to.be.a("object");
  });

  it("authManager.generateToken: ", function() {
    test.expect(authManager).to.have.property("generateToken");
  });

  it("authManager.generateToken is a function: ", function() {
    test.expect(authManager.generateToken).to.be.a("function");
  });

  it("generateToken rocks: ", function(done) {
    const credentials = {
      "nif": "12345678Z",
      "password": "Admin@123"
    };
    authManager.generateToken(credentials)
    .then(token => {
        test.expect(token).to.be.equal("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWYiOiIxMjM0NTY3OFoiLCJwYXNzd29yZCI6IkFkbWluQDEyMyJ9.xsdoaPAbbI82r4Hm2eP1BmByCyf5G-XJOkv4Ef9juII");
        done();
    });
  });

  it("authManager.verifyToken: ", function() {
    test.expect(authManager).to.have.property("verifyToken");
  });

  it("authManager.verifyToken is a function: ", function() {
    test.expect(authManager.verifyToken).to.be.a("function");
  });

  it("verifyToken rocks: ", function(done) {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWYiOiIxMjM0NTY3OFoiLCJwYXNzd29yZCI6IkFkbWluQDEyMyJ9.xsdoaPAbbI82r4Hm2eP1BmByCyf5G-XJOkv4Ef9juII";
    authManager.verifyToken(token)
    .then(credentials => {
        test.expect(credentials).to.be.a("object");
        test.expect(credentials).to.have.property("nif");
        test.expect(credentials.nif).to.be.equal("12345678Z");
        test.expect(credentials).to.have.property("password");
        test.expect(credentials.password).to.be.equal("Admin@123");
        done();
    });
  });
};