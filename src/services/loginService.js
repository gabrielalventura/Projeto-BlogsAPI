const { User } = require('../models');

const verifyLogin = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });
  return user;
};

module.exports = { verifyLogin };