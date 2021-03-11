'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    body: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    storyId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    Comment.belongsToMany(models.User, {
      through: {
        model: "Like",
        unique: false,
        scope: {
          likeableType: "comment"
        }
      },
      foreignKey: "likeableId",
      as: "likingUsers",
      constraints: false
    })
    Comment.belongsTo(models.Story, {foreignKey: 'storyId'});
    Comment.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Comment;
};
