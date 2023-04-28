const Movie = require('../../models/movie');

const updateById = async (req, res) => {
  const { movieId } = req.params;
  const result = await Movie.findByIdAndUpdate(movieId, req.body, { new: true });
  res.status(200).json({ message: 'Movie was updated to:', result });
};

module.exports = updateById;
