const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send("welcome to login route");
});
router.get("/register", (req, res) => {
  res.send("welcome to register");
});

module.exports = router;
