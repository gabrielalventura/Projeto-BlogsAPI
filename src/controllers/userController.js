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

const getUsers = async (_req, res) => {
  try {
    const users = await userService.getUsers();
    console.log('users', users);

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
};
