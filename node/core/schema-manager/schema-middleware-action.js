const Joi = require("joi");
const withBasicSchema = include("node/core/schema-manager/hoc-basic-schema");

const MiddlewareSchema = Joi.object().keys({
  preAuthenticate: Joi.func().arity(3).required(),
  authenticate: Joi.func().arity(3).required(),
  postAuthenticate: Joi.func().arity(3).required(),
  validate: Joi.func().arity(3).required(),
  execute: Joi.func().arity(3).required(),
  postExecute: Joi.func().arity(3).required(),
});

module.exports = withBasicSchema(MiddlewareSchema);