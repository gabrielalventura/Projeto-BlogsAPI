const { Category } = require('../models');

const createCategory = async (name) => {
  const category = await Category.create({ name });
  return category;
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

const getAllIds = async (arrIds) => {
  const categoriesIds = await Category.findAll({ where: { id: arrIds } });
  return categoriesIds;
};

module.exports = {
  createCategory,
  getAll,
  getAllIds,
};
