const express = require('express');
const { userController } = require('../controllers');
const validateDisplayName = require('../middleware/validateDisplayName');
const validateEmail = require('../middleware/validateEmail');
const validatePassword = require('../middleware/validatePassword');

const router = express.Router();

router.post('/', validateDisplayName, validateEmail, validatePassword, userController.createUser);

module.exports = router;
