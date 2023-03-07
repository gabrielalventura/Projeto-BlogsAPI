const express = require('express');
const { postController } = require('../controllers');
const validateToken = require('../middleware/validateToken');
// const validateCreatePost = require('../middleware/validateCreatePost');

const router = express.Router();

// router.post('/', validateToken, validateCreatePost, postController.createPost);

router.get('/', validateToken, postController.getPosts);

module.exports = router;