const { isValidObjectId } = require('mongoose');
const { CreateError } = require('../helpers');

const isValidId = (req, res, next) => {
  const { movieId } = req.params;
  const isCorrectId = isValidObjectId(movieId);
  if (!isCorrectId) {
    const error = CreateError(400, `${movieId} is not correct id format`);
    next(error);
  }
  next();
};

module.exports = isValidId;
