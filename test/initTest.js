global.base_dir = __dirname;

global.abs_path = function(path) {
  return base_dir + path;
}

global.include = function(file) {
  return require("./../"+ file);
}

const r = require("ramda");

// load config
global.config = include("node/config/index").test;

// create logger
global.logger = include("node/core/log-manager");

const modules = include("app/modules");
const persistentManager = include("node/core/persistent-manager");
const appManager = include("node/core/app-manager");
const tables = appManager.getTables(modules);
const defaultData = appManager.getDefaultData(modules);
const repositories = appManager.getRepositories(modules);
const tests = appManager.getTests(modules);

// create db
const db = persistentManager.loadDb(tables);

// insert default data
persistentManager.loadDefaultData(db, defaultData, tables);

// create repository
global.repositories = persistentManager.createRepositories(db, repositories, tables);

// create node server
include("node/index.js");

const configTests = require("./node/config");
const coreTests = require("./node/core");

describe("tests base-app-nodejs: ", () => {
	describe("configs-test:", configTests);
  describe("core-test:", coreTests);
  r.forEach(obj => describe(obj.name, obj.tests), tests);
});
