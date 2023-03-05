const { loginService } = require('../services');

const validateEmail = async (req, res, next) => {
  const { email, password } = req.body;
  const rightEmail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;
  // Regex retirado de: https://www.regular-expressions.info/email.html

  const usedEmail = await loginService.verifyLogin(email, password);

  if (usedEmail) {
    return res.status(409).json({ message: 'User already registered' });
  }

  if (!rightEmail.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  } 
  return next();
};

module.exports = validateEmail;