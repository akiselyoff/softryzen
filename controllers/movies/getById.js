const Movie = require('../../models/movie');
const { CreateError } = require('../../helpers');

const getById = async (req, res) => {
  try {
    const { movieId } = req.params;
    const result = await Movie.findById(movieId);
    if (!result) {
      throw CreateError(404, 'Not Found');
    }
    res.json(result);
  } catch (error) {
    const { status = 500, message = 'Server Error' } = error;
    res.status(status).json({ message });
  }
};

module.exports = getById;
