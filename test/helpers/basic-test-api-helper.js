const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const should = chai.should();
const expect = chai.expect;
const assert = chai.assert;

const request = chai.request(`${config.app.basePath}${config.app.versionApi}`);
const requestWithoutVersion = chai.request(config.app.basePath);

module.exports = {
  chai,
  should,
  expect,
  assert,
  request,
  requestWithoutVersion
}