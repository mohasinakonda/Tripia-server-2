const express = require("express");
const router = express.Router();

router.get("/rooms", (req, res) => {
  res.send("welcome to home");
});

module.exports = router;
