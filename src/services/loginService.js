const { User } = require('../models');

const verifyLogin = async (email, password) => {
  const login = await User.findOne({ where: {
    email,
    password,
  },
});
  return login;
};

module.exports = {
  verifyLogin,
};
