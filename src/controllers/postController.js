const { postService } = require('../services');

const createPost = async (req, res) => {
  try {
    const post = req.body;
    const createdPost = await postService.createPost(post);

    return res.status(201).json(createdPost);
  } catch (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
};

module.exports = {
  createPost,
};
