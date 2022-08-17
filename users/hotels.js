const express = require("express");
const Hotel = require("../modals/Hotel.js");
const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const saveHotel = await newHotel.save();

    res.status(200).json(saveHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});
// update
router.put("/:id", async (req, res) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});
// GET HOTEL
router.get("/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET ALL HOTELS
router.get("/", async (req, res) => {
  try {
    const hotels = await Hotel.find();

    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);

    res.status(200).json("hotel deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
