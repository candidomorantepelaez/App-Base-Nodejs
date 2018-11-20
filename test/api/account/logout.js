const test = require("./../../helpers/basic-test-api-helper");

module.exports = () => {
  it("{} : ", function(done) {
    test
      .requestWithoutVersion
      .post("/logout")
      .send({})
      .end((err, res) => {
        test.expect(err).to.be.null;
        test.expect(res).to.have.status(401);
        done();
      });
  });
};