const express = require('express');
const { postController } = require('../controllers');
const validateToken = require('../middleware/validateToken');

const router = express.Router();

router.post('/', validateToken, postController.createPost);

module.exports = router;