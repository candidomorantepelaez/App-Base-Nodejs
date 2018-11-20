const cookiesHttp = include("node/core/cookie-manager/cookie-http");
const cookiesElectron = include("node/core/cookie-manager/cookie-electron");

const getCookiesManager = () => {
  if (config.app.electron === true) {
    return cookiesElectron;
  }
  return cookiesHttp;
}

module.exports = getCookiesManager();
