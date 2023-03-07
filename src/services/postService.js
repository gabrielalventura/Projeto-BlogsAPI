const { BlogPost, PostCategory, sequelize } = require('../models');

const createPost = async ({ title, content, categoryIds }) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const postCreated = await BlogPost.create(
        { title, content },
        { transaction: t },
      );
      const arrPromisecategoryId = categoryIds.map((m) =>
        PostCategory.create(m, { transaction: t }));
      const arrCategoryId = await Promise.all(arrPromisecategoryId);
      postCreated.dataValues.categoryIds = arrCategoryId;
      return postCreated;
    });
    return result;
  } catch (error) {
    return { Message: error.message };
  }
};

module.exports = {
  createPost,
};