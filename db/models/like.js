'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    userId: DataTypes.INTEGER,
    likeableId: DataTypes.INTEGER,
    likeableType: DataTypes.STRING
  }, {});
  Like.associate = function (models) {
    // associations can be defined here
  };
  return Like;
};
