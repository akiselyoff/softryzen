const { User } = require('../../models/user');

const logout = async (req, res) => {
  const { _id, name } = req.user;
  await User.findByIdAndUpdate(_id, { token: '' });
  res.json({ message: `${name} logout success` });
};

module.exports = logout;
