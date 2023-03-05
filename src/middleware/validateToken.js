const { verifyToken } = require('../auth/authFunctions');

const validateToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    const payload = verifyToken(authorization);
    req.data = payload.data;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = validateToken;
