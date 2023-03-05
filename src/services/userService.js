const { User } = require('../models');

const createUser = ({ displayName, email, password, image }) => 
User.create({ displayName, email, password, image });

const getUser = () => User.findAll();

module.exports = {
  createUser,
  getUser,
};
