const { Schema, model } = require('mongoose');
const Joi = require('joi').extend(require('@joi/date'));
const { handleSchemaValidationError } = require('../helpers');

const registerSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  repeat_password: Joi.ref('password'),
});

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post('save', handleSchemaValidationError);

const User = model('user', userSchema);

module.exports = {
  User,
  registerSchema,
};