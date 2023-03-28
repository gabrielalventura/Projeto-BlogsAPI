const { postService } = require('../services');

const getPosts = async (_req, res) => {
  const posteds = await postService.getPosts();
  return res.status(200).json(posteds);
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postService.getById(id);
    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
  return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const post = req.body;
    const updated = await postService.updateById(id, post);
    if (!post) {
      return res.status(400).json({ message: 'Some required fields are missing' });
  }
    return res.status(200).json(updated);
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
};

module.exports = {
  getPosts,
  getById,
  update,
};
