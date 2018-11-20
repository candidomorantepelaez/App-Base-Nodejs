const productSchema = include("app/product/product-schema");
const r = require("ramda");
const checkAuthentication = include("app/globals/functions/check-authentication");

const authenticate = (req, res, next) => {
  checkAuthentication(req)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
}

const execute = (req, res, next) => {
  const product = req.body.product;
  const id = req.params.id;
  if (productSchema.isValid(store) === true
    && r.isNil(product["_id"]) === false
    && id === product["_id"]) {
    repositories
      .products
      .update(product)
      .then(result => res.status(200).send(result))
      .catch(err => res.status(500).send({ message: err }));
  } else {
    res.status(400).send({ message: "invalid data" });
    return;
  };
};

module.exports = {
  authenticate,
  execute
};
