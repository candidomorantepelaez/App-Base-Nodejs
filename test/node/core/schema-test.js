const schemaManager = require("./../../../node/core/schema-manager");
const test = require("./../../helpers/basic-test-helper");
const Joi = require("joi");
const withBasicSchema = schemaManager.withBasicSchema;

module.exports = () => {
  it("export schemaManager: ", function() {
    test.expect(schemaManager).to.have.property("withBasicSchema");
  });

  it("export withBasicSchema: ", function() {
    test.expect(withBasicSchema).to.be.a("function");
  });

  it("withBasicSchema is correct: ", function() {
    const schema = withBasicSchema({});
    test.expect(schema).to.be.a("object");
    test.expect(schema).to.have.property("isValid");
  });

  it("withBasicSchema rocks: ", function() {
    const testSchema = Joi.object().keys({
      name: Joi.string(),
    });
    const schema = withBasicSchema(testSchema);
    const result = schema.isValid({
      name: 123
    })
    test.expect(result).to.be.equal(false);
    const result2 = schema.isValid({
      name: "test"
    });
    test.expect(result2).to.be.equal(true);
  });
};