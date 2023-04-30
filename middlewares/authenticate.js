const jwt = require('jsonwebtoken');
const { CreateError } = require('../helpers');
const { User } = require('../models/user');
require('dotenv').config();

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');
  if (bearer !== 'Bearer') next(CreateError(401, 'Not authorized'));
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token) next(CreateError(401, 'Not authorized'));
    req.user = user;
    next();
  } catch (error) {
    next(CreateError(401, error.message));
  }
};

module.exports = authenticate;
