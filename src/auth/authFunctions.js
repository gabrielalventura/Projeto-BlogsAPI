const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'authLogin';

const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '30min',
};

const createToken = (data) => jwt.sign({ data }, secret, JWT_CONFIG);

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = {
  createToken,
  verifyToken,
};

// funções desenvolvidas a partir da aula da seção 6 dia 04 do módulo de back-end; 