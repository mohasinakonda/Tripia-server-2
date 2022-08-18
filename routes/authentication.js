const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome to home");
});
router.get("/register", (req, res) => {
  res.send("welcome to register");
});

module.exports = router;
