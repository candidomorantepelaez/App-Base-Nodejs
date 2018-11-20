const r = require("ramda");

const setCookie = (res, name, value) => {
  res.cookie(name, value, { domain: config.cookies.domain, path: config.cookies.path });
}

const clearCookie = (res, name) => {
  res.clearCookie(name, { domain: config.cookies.domain, path: config.cookies.path });
}

const getCookie = (req, name) => {
  if (r.isEmpty(req.cookies)) {
    return null;
  }
  if (!r.isNil(req.cookies[name])) {
    return req.cookies[name];
  }
  return null;
}

module.exports = {
  setCookie,
  clearCookie,
  getCookie
}