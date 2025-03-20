const express = require("express");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/database");
const logger = require("./middleware/logger");

//Instantiate the server
const app = express();

//connect to database
connectDB();

//middlewares
app.use(express.json()); //Parse Json data
app.use(logger); // Logger middleware to log the request method and url

//routes
app.use("/api/auth", authRoutes);
app.use("/api", logger, userRoutes);

//ErrorHandler
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something got wrong!!");
});

//start the server
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
