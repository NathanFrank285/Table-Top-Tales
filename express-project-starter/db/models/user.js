'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING.BINARY,
    avatarUrl: DataTypes.TEXT,
    biography: DataTypes.TEXT
  }, {});
  User.associate = function (models) {
    User.belongsToMany(models.Story, {
      through: {
        model: "Like",
        unique: false,
      },
      foreignKey: "userId",
      as: "likedStories",
      constraints: false,
    });
    User.hasMany(models.Story, { foreignKey: `userId` })
    User.belongsToMany(models.Comment, {
      through: {
        model: "Like",
        unique: false,
      },
      foreignKey: "userId",
      as: "likedComments",
      constraints: false,
    });
    User.belongsToMany(models.User, {
      // User => User  through follow as follower
      through: "Follow",
      otherKey: 'userId',
      foreignKey: 'followerId',
      as: 'following'
    });
    User.belongsToMany(models.User, {
      // User => User through follow as following
      through: "Follow",
      otherKey: 'followerId',
      foreignKey: 'userId',
      as: 'follower'
    });
  };
  return User;
};
