const { Movie } = require('../../models/movie');
const { CreateError } = require('../../helpers');

const getById = async (req, res) => {
  const { movieId } = req.params;
  const result = await Movie.findById(movieId);
  if (!result) throw CreateError(404, 'Not Found');
  res.json(result);
};

module.exports = getById;
