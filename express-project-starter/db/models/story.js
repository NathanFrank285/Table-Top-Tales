'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    picture: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {});
  Story.associate = function(models) {
    Story.hasMany(models.Comment, { foreignKey: "storyId" });
    Story.belongsTo(models.User, { foreignKey: "userId" }); // add the has on on user model
  };
  return Story;
};
