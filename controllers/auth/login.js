const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../../models/user');
const { CreateError } = require('../../helpers');
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw CreateError(401, 'Email not found');
  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) throw CreateError(401, 'Password wrong');
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '24h' });
  res.json({ token });
};

module.exports = login;
