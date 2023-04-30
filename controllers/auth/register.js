const bcrypt = require('bcryptjs');
const { User } = require('../../models/user');
const { CreateError } = require('../../helpers');

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) throw CreateError(409, 'Email already exist');
  const hashPassword = await bcrypt.hash(password, 10);
  const result = await User.create({
    name,
    email,
    password: hashPassword,
  });
  res.status(201).json({ message: `User ${result.name} register succesfull` });
};

module.exports = register;
