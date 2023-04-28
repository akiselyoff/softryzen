const Movie = require('../../models/movie');

const removeById = async (req, res) => {
  const { movieId } = req.params;
  const result = await Movie.findById(movieId);
  await Movie.findByIdAndRemove(movieId);
  res.status(200).json({ message: 'Contact was removed', result }); // status 200 - because 204 do not return a message
};

module.exports = removeById;
