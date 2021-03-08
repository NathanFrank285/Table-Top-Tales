'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Follows",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "Users" },
          unique: "follow_unique_constraint",
        },
        followerId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "Users" },
          unique: "follow_unique_constraint",
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        uniqueKeys: {
          follow_unique_constraint: {
            fields: ['userId', 'followerId']
          }
        },
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Follows');
  }
};
