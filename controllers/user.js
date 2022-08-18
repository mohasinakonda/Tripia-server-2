const User = require("../modals/User.js");
const bcrypt = require("bcryptjs");
const createError = require("../utils/error");
// usr register
const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(200).send({ message: "user has been created!" });
  } catch (err) {
    next(err);
  }
};
// user login
const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) return next(createError(404, "user not found!"));
    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!comparePassword)
      return next(createError(400, "wrong password or username!"));
    res.status(200).json(user);
  } catch (err) {
    // console.log(err);
    next(err);
  }
};

module.exports = { register, login };
