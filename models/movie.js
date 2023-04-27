const { Schema, model } = require('mongoose');

const movieSchema = new Schema({
  title: String,
  director: String,
  release: String,
});

const Movie = model('movie', movieSchema);

module.exports = Movie;
