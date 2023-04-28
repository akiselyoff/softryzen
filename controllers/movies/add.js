const Movie = require('../../models/movie');

const add = async (req, res) => {
  const { movieId } = req.params;
  const result = await Movie.create(req.body);
  res.status(201).json(result);
};

module.exports = add;
