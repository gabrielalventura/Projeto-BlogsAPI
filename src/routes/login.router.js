const express = require('express');
const { loginController } = require('../controllers');
// const validateToken = require('../middleware/validateToken');

const router = express.Router();

router.post('/', loginController);

module.exports = router;
