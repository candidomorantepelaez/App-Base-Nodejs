const includeCors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", config.http.AccessControlAllowOrigin);
  res.header("Access-Control-Allow-Headers", config.http.AccessControlAllowHeaders);
  res.header("Access-Control-Allow-Methods", config.http.AccessControlAllowMethods);
  res.header("Access-Control-Allow-Credentials", config.http.AccessControlAllowCredentials);
  res.header("Allow", config.http.Allow);
  next();
};

module.exports = includeCors;