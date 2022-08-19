const jwt = require("jsonwebtoken");
const createError = require("./error.js");
const err = require("./error.js");

const verifyJWTtoken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "you are not authenticated!"));
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return next(createError(403, "token is not valid!"));
    req.user = user;
    next();
  });
};

const verifyUser = (req, res, next) => {
  verifyJWTtoken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "you are not authorized"));
    }
  });
};
module.exports = { verifyJWTtoken, verifyUser };
