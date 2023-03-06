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

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const register = await userService.getUserById(id);

    if (!register) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(register);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// usando como base material do course do dia 6.1 do módulo de back-end;

module.exports = {
  createUser,
  getUsers,
  getUserById,
};
