const express = require('express');
const { userController } = require('../controllers');
const { getUsers } = require('../controllers/userController');
const validateDisplayName = require('../middleware/validateDisplayName');
const validateEmail = require('../middleware/validateEmail');
const validatePassword = require('../middleware/validatePassword');
const validateToken = require('../middleware/validateToken');

const router = express.Router();

router.post('/', validateDisplayName, validateEmail, validatePassword, userController.createUser);

router.get('/', validateToken, getUsers);

module.exports = router;
