const checkAuthentication = include("app/globals/functions/check-authentication");
const r = require("ramda");

const authenticate = (req, res, next) => {
  checkAuthentication(req)
    .then(credentials => next())
    .catch(error => res.status(401).send({ message: error }));
}

const execute = (req, res, next) => {
  const id = req.params.id;
  if (r.isNil(id) === false){
    repositories
      .products
      .findOne({ _id: id })
      .then(result => res.status(200).send(result))
      .catch(err => res.status(500).send({ message: err }));
  } else {
    res.status(400).send({ message: "invalid data" });
  }
};

module.exports = {
  authenticate,
  execute
};
