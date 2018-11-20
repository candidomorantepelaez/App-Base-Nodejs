const withBasicMiddlewareAction = (action) => {
  action.preAuthenticate = (req, res, next) => {
    logger.log("info", "pre authenticate");
    next();
  }

  action.authenticate = (req, res, next) => {
    logger.log("info", "authenticate");
    next();
  }

  action.postAuthenticate = (req, res, next) => {
    logger.log("info", "post authenticate");
    next();
  }

  action.validate = (req, res, next) => {
    logger.log("info", "validate");
    next();
  }

  action.execute = (req, res, next) => {
    logger.log("info", "execute");
    next();
  }

  action.postExecute = (req, res, next) => {
    logger.log("info", "post execute");
    res.status(200).send({ message: "url list!!!" });
  }

  return action;
}

module.exports = withBasicMiddlewareAction;