const Movie = require('../../models/movie');

const getById = async (req, res) => {
  const { movieId } = req.params;
  const result = await Movie.findById(movieId);
  res.json(result);
};

module.exports = getById;
