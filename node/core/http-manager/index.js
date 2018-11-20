const corsManager = include("node/core/http-manager/cors");

const getCorsManager = () => {
  if (config.http.cors === true) {
    return corsManager;
  }
  return (req, res, next) => next();
}

module.exports = {
  getCors: getCorsManager(),
};