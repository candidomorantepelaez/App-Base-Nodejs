const handler404 = include("node/core/routes-manager/handler404");
const createRouter = include("node/core/routes-manager/create-router");

module.exports = {
  handler404,
  createRouter,
};