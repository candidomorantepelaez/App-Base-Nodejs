const fs = require("fs");

const readJson = (file) => {
  const document = fs.readFileSync(file);
  return JSON.parse(document);
}

module.exports = {
  readJson
}