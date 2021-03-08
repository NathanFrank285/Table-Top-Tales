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
  User.associate = function(models) {
    User.hasMany(models.Comment, { foreignKey: "userId" });
  };
  return User;
};
