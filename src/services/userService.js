const { User } = require('../models');

const createUser = ({ displayName, email, password, image }) => 
User.create({ displayName, email, password, image });

const getUsers = () => User.findAll();

module.exports = {
  createUser,
  getUsers,
};
