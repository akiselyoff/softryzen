const currentUser = async (req, res) => {
  const { name, email, _id } = req.user;
  res.status(201).json({ name, email, _id });
};

module.exports = currentUser;
