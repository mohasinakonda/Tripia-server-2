const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./users/authentication.js");
const hotelRoute = require("./users/hotels.js");
const userRoute = require("./users/users.js");
require("dotenv/config");
const app = express();

const port = process.env.PORT || 5000;
const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("db connected");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("mongodb connected");
});
//middleware
app.use(express.json());
app.use("/auth/login", authRoute);
app.use("/auth/hotels", hotelRoute);
app.use("/auth/users", userRoute);

app.use((error, _req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
});
app.listen(port, () => {
  connect();
  console.log(`server running on port ${port}`);
});
