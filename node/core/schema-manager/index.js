const withBasicSchema = include("node/core/schema-manager/hoc-basic-schema");
const schemaAction = include("node/core/schema-manager/schema-action");
const schemaMiddlewareAction = include("node/core/schema-manager/schema-middleware-action");
const schemaRoutes = include("node/core/schema-manager/schema-routes");

module.exports = {
  withBasicSchema,
  schemaAction,
  schemaRoutes,
  schemaMiddlewareAction,
}