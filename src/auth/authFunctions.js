const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'authLogin';

const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '30min',
};

const createToken = (email) => jwt.sign({ email }, secret, JWT_CONFIG);
// console.log('verificando token', createToken('teste@teste.com'));
const verifyToken = (token) => jwt.verify(token, secret);
// console.log('verificando token', verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlLmNvbSIsImlhdCI6MTY3ODA5OTcwNywiZXhwIjoxNjc4MTAxNTA3fQ.ocnTMDEPQ0H_hwjaefq9cd5nA9KlmCA6598p9NiA_3U', secret));

module.exports = {
  createToken,
  verifyToken,
};

// funções desenvolvidas a partir da aula da seção 6 dia 04 do módulo de back-end; 