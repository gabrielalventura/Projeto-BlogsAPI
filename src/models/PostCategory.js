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
      as: 'posts',
      through: PostCategory,
      foreignKey: 'postId', // se refere ao id de post na tabela de "post_categories"
      otherKey: 'categoryId', // se refere ao outro id presente na tabela
    });
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };
  return PostCategory;
};