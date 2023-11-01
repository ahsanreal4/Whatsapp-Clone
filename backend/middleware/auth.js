const { jwtSecret } = require("../data/secrets");
const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const jwtHeader = req.headers["x-jwt"];

  const token = jwtHeader
    ? jwtHeader
    : authHeader
    ? authHeader.split(" ")[1]
    : null;
  if (token) {
    jwt.verify(token, jwtSecret, (err, user) => {
      if (err) return next(res.status(403).send("Invalid JWT token"));
      if (err) return next();
      req.user = user;
      next();
    });
  } else next();
};

module.exports = { authenticateJWT };
