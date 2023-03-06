const express = require('express');
const { userController } = require('../controllers');
const validateDisplayName = require('../middleware/validateDisplayName');
const validateEmail = require('../middleware/validateEmail');
const validatePassword = require('../middleware/validatePassword');
const validateToken = require('../middleware/validateToken');

const router = express.Router();

router.post('/', validateDisplayName, validateEmail, validatePassword, userController.createUser);

router.get('/', validateToken, userController.getUsers);

router.get('/:id', validateToken, userController.getUserById);

module.exports = router;
