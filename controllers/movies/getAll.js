const { Movie } = require('../../models/movie');

const getAll = async (req, res) => {
  const result = await Movie.find({}, '-createdAt -updatedAt');
  res.json(result);
};

module.exports = getAll;
