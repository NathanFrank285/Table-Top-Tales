"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Follows",
      [
        {
          userId: 1,
          followerId: 2,
          createAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          followerId: 1,
          createAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          followerId: 1,
          createAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          followerId: 2,
          createAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4,
          followerId: 1,
          createAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          followerId: 1,
          createAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          followerId: 2,
          createAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          followerId: 1,
          createAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          followerId: 1,
          createAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          followerId: 2,
          createAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          followerId: 1,
          createAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          followerId: 1,
          createAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          followerId: 2,
          createAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          followerId: 1,
          createAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          followerId: 1,
          createAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          followerId: 2,
          createAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          followerId: 1,
          createAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Follows", null, {});
  },
};
