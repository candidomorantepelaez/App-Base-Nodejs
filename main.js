global.base_dir = __dirname;

global.abs_path = function(path) {
  return base_dir + path;
}

global.include = function(file) {
  return require(abs_path('/' + file));
}

global.config = include("node/config/index").development;
console.log("config load...");

global.logger = include("node/core/log-manager");
logger.info("logger load...");

const modules = include("app/modules");
logger.info("modules load ...");

const persistentManager = include("node/core/persistent-manager");
const appManager = include("node/core/app-manager");
const tables = appManager.getTables(modules);
const defaultData = appManager.getDefaultData(modules);
const repositories = appManager.getRepositories(modules);

// create db
const db = persistentManager.loadDb(tables);
logger.info("db load ...");

// insert default data
persistentManager.loadDefaultData(db, defaultData, tables);
logger.info("default data load ...");

// create repository
global.repositories = persistentManager.createRepositories(db, repositories, tables);
logger.info("repositories load ...");

// create node server
include("node/index.js");
logger.info("node load ...");
