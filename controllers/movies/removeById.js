const { Movie } = require('../../models/movie');

const removeById = async (req, res) => {
  const { movieId } = req.params;
  const removedMovie = await Movie.findById(movieId);
  await Movie.findByIdAndRemove(movieId);
  res.status(200).json({ message: 'Movie was removed', removedMovie }); // status 200 - because 204 do not return a message
};

module.exports = removeById;
