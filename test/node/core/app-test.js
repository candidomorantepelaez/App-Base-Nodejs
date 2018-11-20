const appManager = require("./../../../node/core/app-manager");
const test = require("./../../helpers/basic-test-helper");
const r = require("ramda");

module.exports = () => {

  it("export appManager: ", function() {
    test.expect(appManager).to.be.a("object");
  });

  it("appManager.getTables exists: ", function() {
    test.expect(appManager).to.have.property("getTables");
    test.expect(appManager.getTables).to.be.a("function");
  });

  it("appManager.getTables is correct: ", function() {
    const modules = [
      {
        tables: ["test"],
      }
    ];
    const tables = appManager.getTables(modules);
    test.expect(tables).to.be.a("array");
    test.expect(tables[0]).to.be.a("string");
    test.expect(tables[0]).to.equal("test");
  });

  it("appManager.getTables without data is correct: ", function() {
    const modules = [];
    const tables = appManager.getTables(modules);
    test.expect(tables).to.be.a("array");
    test.expect(r.isEmpty(tables)).to.be.equal(true);
  });

  it("appManager.getDefaultData exists: ", function() {
    test.expect(appManager).to.have.property("getDefaultData");
    test.expect(appManager.getDefaultData).to.be.a("function");
  });

  it("appManager.getDefaultData is correct: ", function() {
    const modules = [
      {
        defaultData: {
          test: [
            { name: "test"},
          ],
        }
      }, {
        defaultData: {
          test2: [
            { name2: "test2"},
          ],
        }
      }
    ];
    const defaultData = appManager.getDefaultData(modules);
    test.expect(defaultData).to.have.property("test");
    test.expect(defaultData.test).to.be.a("array");
    test.expect(defaultData.test[0]).to.be.a("object");
    test.expect(defaultData.test[0]).to.have.property("name");
    test.expect(defaultData.test[0].name).to.be.equal("test");
    test.expect(defaultData).to.have.property("test2");
    test.expect(defaultData.test2).to.be.a("array");
    test.expect(defaultData.test2[0]).to.be.a("object");
    test.expect(defaultData.test2[0]).to.have.property("name2");
    test.expect(defaultData.test2[0].name2).to.be.equal("test2");
  });

  it("appManager.getDefaultData without data is correct: ", function() {
    const modules = [];
    const defaultData = appManager.getDefaultData(modules);
    test.expect(defaultData).to.be.a("object");
    test.expect(r.isEmpty(defaultData)).to.be.equal(true);
  });

  it("appManager.getCustomRoutes exists: ", function() {
    test.expect(appManager).to.have.property("getRoutes");
    test.expect(appManager.getRoutes).to.be.a("function");
  });

  it("appManager.getCustomRoutes is correct: ", function() {
    const modules = [
      {
        routes: [
        {
          url: "/test",
          method: "post",
          action: {
            execute: () => {}
          },
        }
      ],
    },
    ];
    const customRoutes = appManager.getRoutes(modules);
    test.expect(customRoutes).to.be.a("array");
    test.expect(customRoutes[0]).to.be.a("object");
    test.expect(customRoutes[0]).to.have.property("url");
    test.expect(customRoutes[0].url).to.equal("/test");
    test.expect(customRoutes[0]).to.have.property("action");
    test.expect(customRoutes[0].action).to.be.a("object");
    test.expect(customRoutes[0].action).to.have.property("execute");
    test.expect(customRoutes[0].action.execute).to.be.a("function");
  });

  it("appManager.getCustomRoutes without data is correct: ", function() {
    const modules = [];
    const customRoutes = appManager.getRoutes(modules);
    test.expect(customRoutes).to.be.a("array");
    test.expect(r.isEmpty(customRoutes)).to.be.equal(true);
  });

  it("appManager.getRepositories exists: ", function() {
    test.expect(appManager).to.have.property("getRepositories");
    test.expect(appManager.getRepositories).to.be.a("function");
  });

  it("appManager.getRepositories with data is correct: ", function() {
    const modules = [
      {
        repository: {
          test: {
            testOne: () => new Promise((resolve, reject) => {
              console.log("paso");
              resolve({ "message": "test custom rocks!!" });
            }),
          },
        },
      },
    ];
    const customRepository = appManager.getRepositories(modules);
    test.expect(customRepository).to.be.a("object");
    test.expect(customRepository.test).to.be.a("object");
    test.expect(customRepository.test).to.have.property("testOne");
    test.expect(customRepository.test.testOne).to.be.a("function");
  });

  it("appManager.getRepositories without data is correct: ", function() {
    const modules = [];
    const customRepository = appManager.getRepositories(modules);
    test.expect(customRepository).to.be.a("object");
    test.expect(r.isEmpty(customRepository)).to.be.equal(true);
  });

  it("appManager.getTests exists: ", function() {
    test.expect(appManager).to.have.property("getTests");
    test.expect(appManager.getTests).to.be.a("function");
  });

  it("appManager.getTests without data is correct: ", function() {
    const modules = [];
    const customTests = appManager.getTests(modules);
    test.expect(customTests).to.be.a("array");
    test.expect(r.isEmpty(customTests)).to.be.equal(true);
  });

  it("appManager.getTests with data is correct: ", function() {
    const routesTests = include("app/account/tests/routes-test");
    const modules = [
      {
        tests: () => {
          describe("Routes Module Test: ", routesTests);
        },
      },
    ];
    const customTests = appManager.getTests(modules);
    test.expect(customTests).to.be.a("array");
    test.expect(customTests[0]).to.be.a("object");
    test.expect(customTests[0]).to.have.property("name");
    test.expect(customTests[0]).to.have.property("tests");
  });
};