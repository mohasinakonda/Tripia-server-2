const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} = require("../controllers/user.js");
const {
  verifyJWTtoken,
  verifyUser,
  verifyAdmin,
} = require("../utils/verify-jwt.js");

const router = express.Router();

//////////////////////////////
/* router.get("/authentication", verifyJWTtoken, (req, res, next) => {
  res.send("login successful");
});
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("login successful and delete successful!");
});
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("login successful by admin and delete all account successful!");
}); */
//////////////////////////////////
// update
router.put("/:id", verifyUser, updateUser);
// GET HOTEL
router.get("/:id", verifyUser, getUser);
//GET ALL HOTELS
router.get("/", verifyAdmin, getUsers);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

module.exports = router;
