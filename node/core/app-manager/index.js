const r = require("ramda");

const getTables = (modules) =>{
  const modulesWithTables = r.filter(obj => r.isNil(obj.tables) === false, modules);
  if (r.isNil(modulesWithTables) === false) {
    return r.chain(obj => obj.tables , modulesWithTables);
  }
  return [];
}

const getDefaultData = (modules) => {
  const modulesWithDefaultData = r.filter(obj => r.isNil(obj.defaultData) === false, modules);
  if (r.isNil(modulesWithDefaultData) === false) {
    return r.reduce((acc, obj) => r.merge(acc, obj.defaultData), {}, modulesWithDefaultData);
  }
  return {};
}

const getRoutes = (modules) => {
  const modulesWithRoutes = r.filter(obj => r.isNil(obj.routes) === false, modules);
  if (r.isNil(modulesWithRoutes) === false) {
    return r.chain(obj => obj.routes , modulesWithRoutes);
  }
  return [];
}

const getTests = (modules) => {
  const modulesWithTests = r.filter(obj => r.isNil(obj.tests) === false, modules);
  if (r.isNil(modulesWithTests) === false) {
    return r.chain(obj => [{ name: obj.name, tests: obj.tests }] ,modulesWithTests);
  }
  return [];
}

const getRepositories = (modules) => {
  const modulesWithRepositories = r.filter(obj => r.isNil(obj.repository) === false, modules);
  if (r.isNil(modulesWithRepositories) === false) {
    return r.reduce((acc, obj) => r.merge(acc, obj.repository), {}, modulesWithRepositories);
  }
  return {};
}

module.exports = {
  "getTables": (modules) => getTables(modules),
  "getDefaultData": (modules) => getDefaultData(modules),
  "getRoutes": (modules) => getRoutes(modules),
  "getTests": (modules) => getTests(modules),
  "getRepositories": (modules) => getRepositories(modules),
};