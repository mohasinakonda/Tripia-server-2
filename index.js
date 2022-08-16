const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();

const port = process.env.PORT || 5000;
console.log(process.env.DB_URI);
const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("db connected");
  } catch (error) {
    throw error;
  }
};

app.listen(port, () => {
  connect();
  console.log(`server running on port ${port}`);
});