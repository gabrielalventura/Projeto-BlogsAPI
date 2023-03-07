const { categoriesService } = require('../services');

const validateCreatePost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const categories = await categoriesService.getAllIds();
  const validyId = categories.map((c) => c.id);

  if (categoryIds.some((cId) => !validyId.includes(cId))) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  return next();
};
  
module.exports = validateCreatePost;