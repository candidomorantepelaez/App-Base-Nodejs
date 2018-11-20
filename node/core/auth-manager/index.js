const jwtAuth = include("node/core/auth-manager/jwt-auth");

const getAuthManager = () => {
  if(config.auth.type === "jsonwebtoken"){
    return jwtAuth;
  }
};

module.exports = getAuthManager();