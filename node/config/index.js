const fileManager = include("node/core/file-manager");

const development = fileManager.readJson("./node/config/develop.json");
const test = fileManager.readJson("./node/config/test.json");

module.exports = {
  development,
  test
}