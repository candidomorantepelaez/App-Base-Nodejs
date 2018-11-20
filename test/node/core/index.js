const authTests = require("./auth-test");
const cookiesTests = require("./cookie-test");
const httpTests = require("./http-test");
const logTests = require("./log-test");
const schemaTests = require("./schema-test");
const fileTests = require("./file-test");
const middlewareTests = require("./middleware-test");
const persistentTests = require("./persistent-test");
const routesTests = require("./routes-test");
const appTests = require("./app-test");
const cryptoTests = require("./crypto-test");

module.exports = () => {
  describe("Auth Test: ", authTests),
  describe("Cookies Test: ", cookiesTests),
  describe("Http test: ", httpTests),
  describe("Log test: ", logTests),
  describe("Schema test: ", schemaTests),
  describe("File test: ", fileTests),
  describe("Middleware test: ", middlewareTests),
  describe("Persistent test: ", persistentTests),
  describe("Routes test: ", routesTests),
  describe("App test: ", appTests),
  describe("Crypto tests: ", cryptoTests)
};