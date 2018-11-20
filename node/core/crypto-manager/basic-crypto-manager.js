const crypto = require("crypto");
const algorithm = config.crypto.algorithm;
const algorithmHash = config.crypto.algorithmHash;
const inputEncoding = config.crypto.inputEncoding;
const outputEncoding = config.crypto.outputEncoding;
const seed = config.crypto.seed;
const iv = "ghshhstrh";

const encryptHash = text => {
  return crypto.createHmac(algorithmHash, seed)
    .update(text)
    .digest(outputEncoding);
}

const encrypt = text => {
  const cipher = crypto.createCipheriv(algorithm, seed, iv)
  let encrypted = cipher.update(text, inputEncoding, outputEncoding)
  encrypted += cipher.final(outputEncoding);
  const tag = cipher.getAuthTag();
  return {
    content: encrypted,
    tag: tag
  };
}

const decrypt = encrypted => {
  const decipher = crypto.createDecipheriv(algorithm, seed, iv)
  decipher.setAuthTag(encrypted.tag);
  let text = decipher.update(encrypted.content, 'hex', 'utf8')
  text += decipher.final('utf8');
  return text;
}

module.exports = {
  encryptHash,
  encrypt,
  decrypt,
}