const express = require("express");
const {
  createHotel,
  updateHotel,
  getHotel,
  getHotels,
  deleteHotel,
  countByCities,
  getHotelByDivision,
} = require("../controllers/hotels.js");
const { verifyAdmin } = require("../utils/verify-jwt.js");

const router = express.Router();

// CREATE
router.post("/", createHotel);
// update
router.put("/:id", verifyAdmin, updateHotel);
// GET HOTEL
router.get("/:id", getHotel);
//get hotels by division
router.get("/division/:division", getHotelByDivision);
//GET ALL HOTELS
router.get("/", getHotels);
router.get("/countByCities", countByCities);
// router.get("/countByType", getHotels);

// DELETE
router.delete("/:id", deleteHotel);

module.exports = router;
