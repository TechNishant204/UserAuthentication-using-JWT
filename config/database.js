const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  await mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("Connected to MongoDB Successfully");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB");
      console.log(err);
    });
};
module.exports = connectDB;
