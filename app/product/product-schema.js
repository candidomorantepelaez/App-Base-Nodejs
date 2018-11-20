const Joi = require("joi");
const types = include("app/globals/data-types/single-types");
const WarehouseSchema = include("app/warehouse/warehouse-schema");
const schemaManager = include("node/core/schema-manager");

const schema = Joi.object().keys({
  _id: types.alphaNumeric,
  name: types.customAlphaNumeric.required(),
  code: types.customAlphaNumeric.required(),
  description: types.customAlphaNumeric,
  salePrice: types.price.required(),
  buyPrice: types.price,
  warehouse: WarehouseSchema.schema,
  stock: types.number,
});

module.exports = schemaManager.withBasicSchema(schema);