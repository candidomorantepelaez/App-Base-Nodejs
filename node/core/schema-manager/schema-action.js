const Joi = require("joi");
const MiddlewareSchema = include("node/core/schema-manager/schema-middleware-action");
const withBasicSchema = include("node/core/schema-manager/hoc-basic-schema");

const ActionSchema = Joi.object().keys({
  saveAction: MiddlewareSchema.schema.required(),
  updateAction: MiddlewareSchema.schema.required(),
  findByIdAction: MiddlewareSchema.schema.required(),
  findAction: MiddlewareSchema.schema.required(),
  removeAction: MiddlewareSchema.schema.required(),
  allAction: MiddlewareSchema.schema.required(),
  countAction: MiddlewareSchema.schema.required(),
});

module.exports = withBasicSchema(ActionSchema);