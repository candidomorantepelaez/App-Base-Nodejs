const routes = include("app/account/routes");
const test = include("test/helpers/basic-test-helper");

module.exports = () => {

  it("export routes: ", function() {
    test.expect(routes).to.be.a("array");
  });

};