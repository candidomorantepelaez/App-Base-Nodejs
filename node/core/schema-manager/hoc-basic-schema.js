const Joi = require("joi");

const withBasicSchema = (schema) => {
  const basicSchema = {
    schema,
    isValid: (object) => {
      const result = Joi.validate(object, schema);
      if (result.error === null) {
        return true;
      }
      logger.log("error", "validate data", result.error);
      return false;
    }
  }

  return basicSchema;
};

module.exports = withBasicSchema;