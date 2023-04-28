const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    director: { type: String, required: true },
    release: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Movie = model('movie', movieSchema);

module.exports = Movie;
