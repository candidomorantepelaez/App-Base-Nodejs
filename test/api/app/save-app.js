const test = require("./../../helpers/basic-test-api-helper");

module.exports = () => {
  it("{} : ", function(done) {
    test
      .request
      .post("/app")
      .send({})
      .end((err, res) => {
        test.expect(err).to.be.null;
        test.expect(res).to.have.status(400);
        done();
      });
  });
  it(`{
    sellers: "",
    name: "",
    languages: "",
  }: `, function(done) {
    test
      .request
      .post("/app")
      .send({
        sellers: "",
        name: "",
        languages: "",
      })
      .end((err, res) => {
        test.expect(err).to.be.null;
        test.expect(res).to.have.status(400);
        done();
      });
  });
  it(`{
    sellers: 123,
    name: 234,
    languages: 456,
  }: `, function(done) {
    test
      .request
      .post("/app")
      .send({
        sellers: 123,
        name: 234,
        languages: 456,
      })
      .end((err, res) => {
        test.expect(err).to.be.null;
        test.expect(res).to.have.status(400);
        done();
      });
  });
  it(`{
    sellers: [{}],
    name: "",
    languages: [{}],
  }: `, function(done) {
    test
      .request
      .post("/app")
      .send({
        sellers: [{}],
        name: "",
        languages: [{}],
      })
      .end((err, res) => {
        test.expect(err).to.be.null;
        test.expect(res).to.have.status(400);
        done();
      });
  });
  it(`request: {
      sellers: [],
      name: "",
      languages: [],
      }`, function(done) {
    test
      .request
      .post("/app")
      .send({
        "name": "Candido",
        "admin": {
          "name": "Administrator",
            "address": [{
              "street": "Calle del administrador",
              "number": "8",
              "city": "Gijon",
              "state": "Asturias",
              "country": "Spain",
              "codPostal": "45600"
            }],
            "phones": ["666666666"],
            "emails": ["email@email.com"],
            "webs": ["http://www.google.com"],
            "nif": "12345678Z",
            "password": "Admin@123",
            "role": "ADMIN_ROLE"
        }
      })
      .end((err, res) => {
        test.expect(err).to.be.null;
        test.expect(res).to.have.status(200);
        test.expect(res.body).to.have.property("message");
        done();
      });
  });
};