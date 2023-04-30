const bcrypt = require('bcryptjs');
const { User } = require('../../models/user');
const { CreateError } = require('../../helpers');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw CreateError(401, 'Email not found');
  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) throw CreateError(401, 'Password wrong');
  res.json({ comparePassword });
};

module.exports = login;
