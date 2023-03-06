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

const getAll = async (_req, res) => {
  try {
    const categories = await categoriesService.getAll();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCategory,
  getAll,
};
