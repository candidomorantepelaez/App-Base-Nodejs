const express = require("express");
const router = express.Router();
const r = require("ramda");
const middlewareManager = include("node/core/middleware-manager");

const overrideBasicMiddleware = (middleware) => r.merge(middlewareManager.withBasicMiddlewareAction({}), middleware);

const createRoute = (wrapper, route) => {
  const p1 = "preAuthenticate";
  const p2 = "authenticate";
  const p3 = "postAuthenticate";
  const p4 = "validate";
  const p5 = "execute";
  const p6 = "postExecute";
  const c = overrideBasicMiddleware(route.action);
  wrapper[route.method](route.url, c[p1], c[p2], c[p3], c[p4], c[p5], c[p6]);
};

const createRouter = (customRoutes) => {
  r.forEach(route => createRoute(router, route), customRoutes);
  return router;
}

module.exports = createRouter;