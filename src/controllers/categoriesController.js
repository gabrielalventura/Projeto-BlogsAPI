const { categoriesService } = require('../services');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await categoriesService.createCategory(name);

    return res.status(201).json(newCategory);
  } catch (error) {
    return res.status(400).json({ message: '"name" is required' });
  }
};

module.exports = {
  createCategory,
};
