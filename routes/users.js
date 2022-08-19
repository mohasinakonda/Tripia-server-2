const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} = require("../controllers/user.js");
const { verifyJWTtoken, verifyUser } = require("../utils/verify-jwt.js");

const router = express.Router();
router.get("/authentication", verifyJWTtoken, (req, res, next) => {
  res.send("login successful");
});
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("login successful and delete successful!");
});
// update
router.put("/:id", updateUser);
// GET HOTEL
router.get("/:id", getUser);
//GET ALL HOTELS
router.get("/", getUsers);

// DELETE
router.delete("/:id", deleteUser);

module.exports = router;
