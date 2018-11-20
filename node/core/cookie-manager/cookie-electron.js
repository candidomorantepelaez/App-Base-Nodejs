const {session} = require("electron");
const r = require("ramda");

const setCookie = (res, name, value) => {
  session.defaultSession.cookies.set({
    url: config.cookies.url,
    name: name,
    value: value,
    path: config.cookies.path
  }, err => {
    if (err) {
      logger.log("error", "set cookie electron ", err);
    }
  });
}

const clearCookie = (res, name) => {
  session.defaultSession.cookies.remove(config.cookies.url, name);
}

const getCookie = (req, name) => {
  session.defaultSession.cookies.get({
    url: config.cookies.url,
    name
  }, (err, cookies) => {
    if (err) {
      logger.log("error", "get cookie electron", err);
    }
    if (r.isEmpty(cookies)) {
      return null;
    }
    return cookies[0];
  });
}

module.exports = {
  setCookie,
  clearCookie,
  getCookie
}