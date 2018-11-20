const fileManager = require("./../../../node/core/file-manager");
const test = require("./../../helpers/basic-test-helper");

module.exports = () => {
  it("export fileManager: ", function() {
    test.expect(fileManager).to.be.a("object");
  });

  it("fileManager.readJson exist: ", function() {
    test.expect(fileManager).to.have.property("readJson");
  });

  it("readJson Rocks: ", function() {
    const doc = fileManager.readJson("./test/node/core/test.json");
    test.expect(doc).to.be.a("object");
    test.expect(doc).to.have.property("test");
    test.expect(doc.test).to.be.equal(true);
  });

};