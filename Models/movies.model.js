const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  info: {
    type: String,
  },
  image: {
    type: String,
  },
  rating: {
    type: Number,
  },
});

const movieModel = mongoose.model("movies", movieSchema);

module.exports = movieModel;
