const { verifyToken } = require('../auth/authFunctions');

const validateToken = (req, res, next) => {
  try {
    const { authorizathion } = req.headers;
    if (!authorizathion) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const payload = verifyToken(authorizathion);
    console.log('payload', payload);
    req.data = payload.data;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;