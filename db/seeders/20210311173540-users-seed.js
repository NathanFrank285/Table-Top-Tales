'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
      { name: `Jerry`, username: `Jerry`, email: `Jerry@Jackman.com`, hashedPassword: `OhNo`, avatarUrl: `https://www.worldanvil.com/uploads/images/79bf3385bdd7c93a11bf4977fd08fc34.png`, biography: `I love to write stories`, createdAt: new Date(), updatedAt: new Date() },
      { name: `Jesse`, username: `Jesse`, email: `Jesse@Jackman.com`, hashedPassword: `OhNo`, avatarUrl: `https://dtrpg-public-files.s3.us-east-2.amazonaws.com/images/521/273935.jpg`, biography: `I'm here to write!`, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
