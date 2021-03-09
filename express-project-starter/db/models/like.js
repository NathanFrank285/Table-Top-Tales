'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    userId: DataTypes.INTEGER,
    storyId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER
    // create a constraint that you cannot create storyId and commentId at the same time. add a custom validator in the model and for API requests
  }, {});
  Like.associate = function (models) {
    // associations can be defined here
  };
  return Like;
};
