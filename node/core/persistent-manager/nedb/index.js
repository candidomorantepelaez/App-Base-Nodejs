const withBasicRepository = include("node/core/persistent-manager/nedb/with-basic-repository");
const loadDb = include("node/core/persistent-manager/nedb/load-db");
const createRepositories = include("node/core/persistent-manager/nedb/create-repositories");
const loadDefaultData = include("node/core/persistent-manager/nedb/load-default-data");

module.exports = {
  withBasicRepository,
  loadDb,
  createRepositories,
  loadDefaultData,
}
