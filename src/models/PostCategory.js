module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: { type: DataTypes.INTEGER, primaryKey: true },
      categoryId: { type: DataTypes.INTEGER, primaryKey: true },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
    },
  );
  PostCategory.associate = ({ Category, BlogPost }) => {
    Category.belongsToMany(BlogPost, {
      foreignKey: 'postId', // se refere ao id de post na tabela de "post_categories"
      otherKey: 'categoryId', // se refere ao outro id presente na tabela
      through: PostCategory,
      as: 'posts',
    });
    BlogPost.belongsToMany(Category, {
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategory,
      as: 'categories',
    });
  };
  return PostCategory;
};