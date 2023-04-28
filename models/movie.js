const { Schema, model } = require('mongoose');
const Joi = require('joi').extend(require('@joi/date'));
const dateFns = require('date-fns');

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    director: { type: String, required: true },
    release: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Movie = model('movie', movieSchema);

const movieAddSchema = Joi.object({
  title: Joi.string().required(),
  director: Joi.string().required(),
  release: Joi.date().format('DD-MM-YYYY').less('now').required(),
});

module.exports = { Movie, movieAddSchema };
