const withBasicRepository = include("node/core/persistent-manager/nedb/with-basic-repository");
const r = require("ramda");

const createRepository = (table, customRepositories, db) => {
  const repository = r.objOf(table)(withBasicRepository({}, db[table]));
  if (r.isNil(customRepositories)
    || r.isNil(customRepositories[table])) {
    return repository;
  }
  return r.objOf(table)(r.merge(repository.test, customRepositories[table]));
}

const createRepositories = (db, customRepositories, tables) => r.reduce((acc, table) => r.merge(acc, createRepository(table, customRepositories, db)), {}, tables);

module.exports = createRepositories;


