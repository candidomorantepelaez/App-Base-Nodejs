const Joi = require("joi");
const MiddlewareSchema = include("node/core/schema-manager/schema-middleware-action");
const withBasicSchema = include("node/core/schema-manager/hoc-basic-schema");

const RouteSchema = Joi.array().items(
  Joi.object().keys({
    url: Joi.string().required(),
    method: Joi.string().required(),
    action: MiddlewareSchema.schema.required(),
  })
);

module.exports = withBasicSchema(RouteSchema);