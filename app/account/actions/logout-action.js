const cookieManager = include("node/core/cookie-manager");

const execute = (req, res, next) => {
  cookieManager.clearCookie(res, config.cookies.name);
  res.status(200).send({ message: "logout ok!!!"})
};

module.exports = {
  execute
};