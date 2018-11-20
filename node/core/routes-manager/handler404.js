const handler404 = (req, res, next) => {
  res.status(404).send({ message: "lost page" });
}

module.exports = handler404;