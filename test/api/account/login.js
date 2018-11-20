const test = require("./../../helpers/basic-test-api-helper");

module.exports = () => {
  it("{} : ", function(done) {
    test
      .request
      .post("/credentials")
      .send({})
      .end((err, res) => {
        test.expect(err).to.be.null;
        test.expect(res).to.have.status(400);
        done();
      });
  });
  it(`{
    user: "",
    password: "",
  }: `, function(done) {
    test
      .request
      .post("/credentials")
      .send({
        nif: "",
        password: "",
      })
      .end((err, res) => {
        test.expect(err).to.be.null;
        test.expect(res).to.have.status(400);
        done();
      });
  });
  it(`{
    user: "manolo",
    password: "123456",
  }: `, function(done) {
    test
      .request
      .post("/credentials")
      .send({
        nif: "manolo",
        password: "123456",
      })
      .end((err, res) => {
        test.expect(err).to.be.null;
        test.expect(res).to.have.status(400);
        done();
      });
  });
  it(`{
    user: "12345648Z",
    password: "Adkin@123",
  }: `, function(done) {
    test
      .request
      .post("/credentials")
      .send({
        nif: "12345648Z",
        password: "Adkin@123",
      })
      .end((err, res) => {
        test.expect(err).to.be.null;
        test.expect(res).to.have.status(401);
        done();
      });
  });
  it(`{
    user: "12345678Z",
    password: "Admin@123",
  }: `, function(done) {
    test
      .request
      .post("/credentials")
      .send({
        nif: "12345678Z",
        password: "Admin@123",
      })
      .end((err, res) => {
        test.expect(err).to.be.null;
        test.expect(res).to.have.status(200);
        test.expect(res).to.have.cookie('session_id');
        done();
      });
  });
};