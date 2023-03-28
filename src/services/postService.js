const { BlogPost, Category, User } = require('../models');

const getPosts = async () => {
  const posted = await BlogPost.findAll({
    include: [
      { 
        model: Category,
        as: 'categories',
        through: { attributes: [] }, 
      },
      {
        model: User,
        as: 'user',
        attributes: ['id', 'displayName', 'email', 'image'],
      },
    ],
  });
  return posted;
};

const getById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { 
        model: Category,
        as: 'categories',
        through: { attributes: [] }, 
      },
      {
        model: User,
        as: 'user',
        attributes: ['id', 'displayName', 'email', 'image'],
      },
    ],
  });
  return post;
  };

  const updateById = async (id, post) => {
    const updatedPost = await BlogPost.update(post, { where: { id } });
    return updatedPost;
  };

module.exports = {
  getPosts,
  getById,
  updateById,
};