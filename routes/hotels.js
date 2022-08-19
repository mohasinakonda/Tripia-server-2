const express = require("express");
const {
  createHotel,
  updateHotel,
  getHotel,
  getHotels,
  deleteHotel,
} = require("../controllers/hotels.js");
const { verifyAdmin } = require("../utils/verify-jwt.js");

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);
// update
router.put("/:id", verifyAdmin, updateHotel);
// GET HOTEL
router.get("/:id", getHotel);
//GET ALL HOTELS
router.get("/", getHotels);

// DELETE
router.delete("/:id", deleteHotel);

module.exports = router;
