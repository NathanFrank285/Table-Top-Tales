"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Follows",
      [
        { userId: 1, followerId: 2 },
        { userId: 2, followerId: 1 },
        { userId: 3, followerId: 1 },
        { userId: 3, followerId: 2 },
        { userId: 4, followerId: 1 },
        { userId: 5, followerId: 1 },
        { userId: 5, followerId: 2 },
        { userId: 6, followerId: 1 },
        { userId: 7, followerId: 1 },
        { userId: 7, followerId: 2 },
        { userId: 8, followerId: 1 },
        { userId: 9, followerId: 1 },
        { userId: 9, followerId: 2 },
        { userId: 10, followerId: 1 },
        { userId: 11, followerId: 1 },
        { userId: 11, followerId: 2 },
        { userId: 12, followerId: 1 },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Follows", null, {});
  },
};
