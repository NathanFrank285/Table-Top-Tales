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
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: `Jerry`,
          username: `Jerry`,
          email: `Jerry@Jackman.com`,
          hashedPassword: `OhNo`,
          avatarUrl: `https://www.worldanvil.com/uploads/images/79bf3385bdd7c93a11bf4977fd08fc34.png`,
          biography: `I love to write stories`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: `Jesse`,
          username: `Jesse`,
          email: `Jesse@Jackman.com`,
          hashedPassword: `OhNo`,
          avatarUrl: `https://dtrpg-public-files.s3.us-east-2.amazonaws.com/images/521/273935.jpg`,
          biography: `I'm here to write!`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: `Harry`,
          username: `Harry Plotter`,
          email: `george@hey.com`,
          hashedPassword: `OhNo`,
          biography: `I'm here to read!`,
          avatarUrl: `https://s3.envato.com/files/241213217/590_Sun_2.jpg`,
        },
        {
          name: `Barry`,
          username: `NewGuy`,
          email: `juan@hey.com`,
          hashedPassword: `OhNo`,
          biography: `I'm here to read!`,
          avatarUrl: `https://gobrandgo.com/wp-content/uploads/2013/10/surprised-cat-eric-hacke.jpg`,
        },
        {
          name: `Sky`,
          username: `Skylanders`,
          email: `sky@hey.com`,
          hashedPassword: `OhNo`,
          biography: `I'm here to read!`,
          avatarUrl: `https://www.cultpens.com/imgs/products/cp/950_constW/TR60819~Troika-World-In-Your-Hand-Rollerball-Pen-Blue_P1.jpg`,
        },
        {
          name: `Dave`,
          username: `FuryUnited`,
          email: `furry@hey.com`,
          hashedPassword: `OhNo`,
          biography: `I'm here to read!`,
          avatarUrl: `https://cdn.wallpapersafari.com/76/63/h1xca6.jpg`,
        },
        {
          name: `Harry`,
          username: `Harry Plotter`,
          email: `george@hey.com`,
          hashedPassword: `OhNo`,
          biography: `I'm here to read!`,
          avatarUrl: `https://s3.envato.com/files/241213217/590_Sun_2.jpg`,
        },
        {
          name: `Harry`,
          username: `Harry Plotter`,
          email: `george@hey.com`,
          hashedPassword: `OhNo`,
          biography: `I'm here to read!`,
          avatarUrl: `https://s3.envato.com/files/241213217/590_Sun_2.jpg`,
        },
        {
          name: `Harry`,
          username: `Harry Plotter`,
          email: `george@hey.com`,
          hashedPassword: `OhNo`,
          biography: `I'm here to read!`,
          avatarUrl: `https://s3.envato.com/files/241213217/590_Sun_2.jpg`,
        },
        {
          name: `Harry`,
          username: `Harry Plotter`,
          email: `george@hey.com`,
          hashedPassword: `OhNo`,
          biography: `I'm here to read!`,
          avatarUrl: `https://s3.envato.com/files/241213217/590_Sun_2.jpg`,
        },
        {
          name: `Harry`,
          username: `Harry Plotter`,
          email: `george@hey.com`,
          hashedPassword: `OhNo`,
          biography: `I'm here to read!`,
          avatarUrl: `https://s3.envato.com/files/241213217/590_Sun_2.jpg`,
        },
        {
          name: `Harry`,
          username: `Harry Plotter`,
          email: `george@hey.com`,
          hashedPassword: `OhNo`,
          biography: `I'm here to read!`,
          avatarUrl: `https://s3.envato.com/files/241213217/590_Sun_2.jpg`,
        },
      ],
      {}
    );
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
