const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const userRoute = require("./routes/users.js");
const hotelRoute = require("./routes/hotels.js");
const authRoute = require("./routes/authentication.js");
const roomRoute = require("./routes/rooms.js");
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
app.use(cookieParser());
app.use(express.json());

app.use("/auth/hotels/", hotelRoute);
app.use("/auth/", authRoute);
app.use("/auth/user", userRoute);
app.use("/auth/room", roomRoute);

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
