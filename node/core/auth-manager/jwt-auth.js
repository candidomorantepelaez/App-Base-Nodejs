const jwt = require("jsonwebtoken");

const generateToken = (credentials) => {
  return new Promise((resolve, reject) => {
    jwt.sign(credentials, config.auth.secretkey, { noTimestamp: true }, (err, token) =>{
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  });
}

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.auth.secretkey, (err, credentials) => {
      if (err) {
        reject(err);
      }
      resolve(credentials);
    });
  });
};

module.exports = {
  generateToken,
  verifyToken
}
