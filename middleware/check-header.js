const { verifyToken } = require("../utils/jwt-verify");
const checkHeader = function (req, res, next) {
  if (req.path === "/api/login") {
    return next();
  }
  if (req.headers["authorization"]) {
    try {
      let authorization = req.headers["authorization"].split(" ");
      if (authorization[0] !== "Bearer") {
        return res.status(401).send();
      } else {
        req.jwt = verifyToken(authorization[1]);
        return next();
      }
    } catch (err) {
      console.log("err", err);

      return res.status(403).send();
    }
  } else {
    return res.status(401).send();
  }
};
module.exports = checkHeader;
