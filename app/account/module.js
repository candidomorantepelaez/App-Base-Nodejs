const routes = include("app/account/routes");
const defaultData = include("app/account/default-data");
const tests = include("app/account/tests");

module.exports = {
  name: "accounts",
  routes,
  tables: ["accounts"],
  defaultData,
  tests,
}
