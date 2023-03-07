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

module.exports = {
  getPosts,
  getById,
};