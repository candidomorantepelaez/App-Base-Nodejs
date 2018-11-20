const test = require("./../../helpers/basic-test-helper");
const cryptoManager = require("./../../../node/core/crypto-manager");

module.exports = () => {
  it("export cryptoManager: ", function() {
    test.expect(cryptoManager).to.be.a("object");
  });

  it("export cryptoManager.encryptHash: ", function() {
    test.expect(cryptoManager.encryptHash).to.be.a("function");
  });

  it("cryptoManager.encryptHash rocks: ", function() {
    const result = cryptoManager.encryptHash("Admin@123");
    test.expect(result).to.be.equal("a024a7baf7825de8b849baa626f16ab10190b08daaccb4e03685ab7ad0f0e49b");
  });

  it("export cryptoManager.encrypt: ", function() {
    test.expect(cryptoManager.encrypt).to.be.a("function");
  });

  it("cryptoManager.encrypt rocks: ", function() {
    const result = cryptoManager.encrypt("text test");
    test.expect(result).to.be.a("object");
    test.expect(result).to.have.property("tag");
    test.expect(result).to.have.property("content");
  });

  it("export cryptoManager.decrypt: ", function() {
    test.expect(cryptoManager.decrypt).to.be.a("function");
  });

  it("cryptoManager.decrypt rocks: ", function() {
    const input = cryptoManager.encrypt("text test");
    const result = cryptoManager.decrypt(input);
    test.expect(result).to.be.equal("text test");
  });
};
