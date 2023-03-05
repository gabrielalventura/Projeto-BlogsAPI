const { createToken } = require('../auth/authFunctions');
const loginService = require('../services');
require('dotenv/config');

const isBodyValid = (email, password) => email && password;

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!isBodyValid(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const user = await loginService.verifyLogin({ email, password });

    if (!user) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const { password: _, ...userWithoutPassword } = user.dataValues;

    const token = createToken(userWithoutPassword);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ message: 'Internal error' });
  }
};
