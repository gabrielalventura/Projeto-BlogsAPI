const { userService } = require('../services');
const { createToken } = require('../auth/authFunctions');

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const user = await userService.createUser({
      displayName,
      email,
      password,
      image,
    });

    const token = createToken(email);

    if (!user) throw Error;
    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
};