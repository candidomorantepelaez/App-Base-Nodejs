const Datastore = require("nedb");
const r = require("ramda");

const withLoadTable = (wrapper, nameTable) => {
  wrapper[nameTable] = new Datastore ({
    filename: `${config.persistent.pathBbdd}/${nameTable}.json`,
    timestampData: true
  });
  wrapper[nameTable].loadDatabase((err) => {
    if (err) {logger.log("error", `error load table ${nameTable}: ${err}`)};
    logger.log("info", `table ${nameTable} load`);
  });
  return wrapper;
};

const loadDb = (tables) => r.reduce(withLoadTable, {}, tables);

module.exports = loadDb;