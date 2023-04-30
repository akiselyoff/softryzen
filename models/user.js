const { Schema, model } = require('mongoose');
const Joi = require('joi').extend(require('@joi/date'));
const { handleSchemaValidationError } = require('../helpers');
const { mailRegex, passwordRegex } = require('../share/variables');

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .pattern(mailRegex)
    .message('Wrong email format! Should be like a mail schema: example@mail.com')
    .required(),
  password: Joi.string()
    .pattern(passwordRegex)
    .message(
      'Wrong password format! Should be  > 7 characters, at least one uppercase letter, one lowercase letter, one number and one special character @$!%*#?&'
    )
    .required(),
  repeat_password: Joi.ref('password'),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .pattern(mailRegex)
    .message('Wrong email format! Should be like a mail schema: example@mail.com')
    .required(),
  password: Joi.string()
    .pattern(passwordRegex)
    .message(
      'Wrong password format! Should be  > 7 characters, at least one uppercase letter, one lowercase letter, one number and one special character @$!%*#?&'
    )
    .required(),
});

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      match: mailRegex,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      match: passwordRegex,
      required: true,
    },
    token: {
      type: String,
      default: '',
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post('save', handleSchemaValidationError);

const User = model('user', userSchema);

module.exports = {
  User,
  registerSchema,
  loginSchema,
};
