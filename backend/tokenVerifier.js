const jwt = require("jsonwebtoken");
require("dotenv").config();

function TokenVerifier(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).send("No token provided");

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).send("No access");
    next();
  });
}

module.exports = TokenVerifier;
