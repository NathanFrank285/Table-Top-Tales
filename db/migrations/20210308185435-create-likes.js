'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Likes", {
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
        unique: "like_unique_constraint",
      },
      likeableId: {
        type: Sequelize.INTEGER,
        references: null,
        unique: "like_unique_constraint",
      },
      likeableType: {
        type: Sequelize.STRING,
        unique: "like_unique_constraint",
      },
      // storyId: {
      //   type: Sequelize.INTEGER,
      //   references: { model: "Stories" },
      // },
      // commentId: {
      //   type: Sequelize.INTEGER,
      //   references: { model: "Comments" },
      // },
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
        like_unique_constraint: {
          fields: ["userId", "likeableId", "likeableType"]
        }
      }
    }

    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Likes');
  }
};
