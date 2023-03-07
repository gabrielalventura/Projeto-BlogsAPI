const { postService } = require('../services');

const getPosts = async (_req, res) => {
  const posteds = await postService.getPosts();
  return res.status(200).json(posteds);
};

module.exports = {
  getPosts,
};
