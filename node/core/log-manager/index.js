const logManager = include("node/core/log-manager/winston-log");

const getLoggerManager = () => {
  if (config.logger.type === "winston") {
    return logManager;
  }
  return {
    log: (type, message, message2) => {
      console.log(`${type} : ${message} - ${message2 || " "}`);
    }
  };
};

module.exports = getLoggerManager();