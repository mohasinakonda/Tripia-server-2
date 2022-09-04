const Hotel = require("../modals/Hotel.js");

const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const saveHotel = await newHotel.save();

    res.status(200).json(saveHotel);
  } catch (error) {
    next(error);
  }
};
const updateHotel = async (req, res, next) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (error) {
    next(error);
  }
};
const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);

    res.status(200).json("hotel deleted successfully");
  } catch (error) {
    next(error);
  }
};
//GET HOTEL

const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};
//GET ALL HOTELS
const getHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();

    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};
// get hotels by division name
const getHotelByDivision = async (req, res, next) => {
  try {
    const divisionsResult = await Hotel.find({ division: req.params.division });
    res.status(200).json(divisionsResult);
  } catch (err) {
    next(err);
  }
};
const countByCities = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();

    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};
// countByCity name
module.exports = {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
  countByCities,
  getHotelByDivision,
};
