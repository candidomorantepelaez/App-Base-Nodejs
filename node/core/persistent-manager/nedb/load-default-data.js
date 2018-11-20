const r = require("ramda");

const checkEmptyTable = (db, nameTable) => new Promise((resolve, reject) => {
  db[nameTable].count({}, (err, count) => {
    if (err) {
      logger.log("error", `check data ${nameTable} default`, err);
      reject();
    }
    if (count === 0) {
      resolve(true);
    }
    resolve(false);
  });
});

const loadData = (db, nameTable, obj) => {
  logger.log("info", `check default data in table ${nameTable}!`);
  checkEmptyTable(db, nameTable)
    .then(result => {
      if (result === true) {
        db[nameTable].insert(obj, (err, newDoc) => {
          if (err) {
            logger.log("error", `created default ${nameTable} data`, err)
          }
          logger.log("info", `created default ${nameTable} data`);
        })
      }
    });
};

const handlerLoadData = (table, db, defaultData) => {
  if (r.has(table, defaultData) === true) {
    loadData(db, table, defaultData[table]);
  }
}

const loadDefaultData = (db, defaultData, tables) => r.forEach(table => handlerLoadData(table, db, defaultData), tables);

module.exports = loadDefaultData;

