const express = require("express");
const {
  createHotel,
  updateHotel,
  getHotel,
  getHotels,
  deleteHotel,
} = require("../controllers/hotels.js");

const router = express.Router();

// CREATE
router.post("/", createHotel);
// update
router.put("/:id", updateHotel);
// GET HOTEL
router.get("/:id", getHotel);
//GET ALL HOTELS
router.get("/", getHotels);

// DELETE
router.delete("/:id", deleteHotel);

module.exports = router;
