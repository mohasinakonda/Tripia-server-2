const User = require("../modals/User.js");

// UPDATE USER
const updateUser = async (req, res, next) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (error) {
    next(error);
  }
};
// DELETE USER
const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json("User deleted successfully");
  } catch (error) {
    next(error);
  }
};
//GET User

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
//GET ALL USERS
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
};
