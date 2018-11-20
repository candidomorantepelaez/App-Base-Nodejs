const cryptoManager = include("node/core/crypto-manager");

const checkCredentials = (credentials) => {
  return new Promise((resolve, reject) => {
    repositories
      .accounts
      .findOne({ nif: credentials.nif })
      .then(seller => {
        if (seller.password === cryptoManager.encryptHash(credentials.password)) {
          resolve(seller);
        }else{
          reject("wrong data");
        }
      })
      .catch(err => reject(err));
  });
};

module.exports = checkCredentials;