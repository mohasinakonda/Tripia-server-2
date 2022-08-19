const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} = require("../controllers/user.js");

const router = express.Router();

// update
router.put("/:id", updateUser);
// GET HOTEL
router.get("/:id", getUser);
//GET ALL HOTELS
router.get("/", getUsers);

// DELETE
router.delete("/:id", deleteUser);

module.exports = router;
