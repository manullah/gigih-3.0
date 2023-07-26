const mongoose = require("mongoose");

const config = require("./config");
const Video = require("../models/video");

/**
 * Configuration
 */
mongoose
  .connect(config.DATABASE_URL)
  .then(async () => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.log("Failed to connect: ", error);
  });

const database = mongoose.connection;

module.exports = database;
