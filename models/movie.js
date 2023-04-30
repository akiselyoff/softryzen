const { Schema, model } = require('mongoose');
const Joi = require('joi').extend(require('@joi/date'));
const { handleSchemaValidationError } = require('../helpers');
// const dateFns = require('date-fns');

const movieAddSchema = Joi.object({
  title: Joi.string().required(),
  director: Joi.string().required(),
  release: Joi.date().format('DD-MM-YYYY').less('now').required(),
});

const movieSchema = new Schema(
  {
    title: { type: String, unique: true, required: true },
    director: { type: String, required: true },
    release: {
      type: String,
      //   get: val => dateFns.format(val, 'dd-MM-yyyy'),
      //   set: val => dateFns.parse(val, 'dd-MM-yyyy', new Date()),
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
);

movieSchema.post('save', handleSchemaValidationError);

const Movie = model('movie', movieSchema);

module.exports = { Movie, movieAddSchema };
