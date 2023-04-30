const { Movie } = require('../../models/movie');

const getAll = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 8 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Movie.find({ owner: _id }, '-createdAt -updatedAt', {
    skip,
    limit,
  }).populate('owner', 'email');
  res.json(result);
};

module.exports = getAll;
