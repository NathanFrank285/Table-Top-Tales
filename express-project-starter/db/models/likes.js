'use strict';
module.exports = (sequelize, DataTypes) => {
  const Likes = sequelize.define('Likes', {
    userId: DataTypes.INTEGER,
    storyId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER
    // create a constraint that you cannot create storyId and commentId at the same time. add a custom validator in the model and for API requests
  }, {});
  Likes.associate = function(models) {
    // associations can be defined here
  };
  return Likes;
};
