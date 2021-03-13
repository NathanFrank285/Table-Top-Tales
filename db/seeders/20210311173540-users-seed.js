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
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: `Barry`,
          username: `NewGuy`,
          email: `juan@hey.com`,
          hashedPassword: `OhNo`,
          biography: `I'm here to read!`,
          avatarUrl: `https://gobrandgo.com/wp-content/uploads/2013/10/surprised-cat-eric-hacke.jpg`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: `Sky`,
          username: `Skylanders`,
          email: `sky@hey.com`,
          hashedPassword: `OhNo`,
          biography: `I'm here to read!`,
          avatarUrl: `https://www.cultpens.com/imgs/products/cp/950_constW/TR60819~Troika-World-In-Your-Hand-Rollerball-Pen-Blue_P1.jpg`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: `Dave`,
          username: `FuryUnited`,
          email: `furry@hey.com`,
          hashedPassword: `OhNo`,
          biography: `I'm here to read!`,
          avatarUrl: `https://cdn.wallpapersafari.com/76/63/h1xca6.jpg`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: `Jorge`,
          username: `Ikiwaru`,
          email: `iki@hey.com`,
          hashedPassword: `OhNo`,
          biography: `I'm here to read!`,
          avatarUrl: `https://www.al.com/resizer/i4-fIVhdQw_IfzOjfCDI0wv7rZs=/1280x0/smart/arc-anglerfish-arc2-prod-advancelocal.s3.amazonaws.com/public/XYZZB6GO2NGLVPUG7KKAWAKEGU.jpg`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: `Penny`,
          username: `runny88`,
          email: `run@hey.com`,
          hashedPassword: `OhNo`,
          biography: `I'm here to read!`,
          avatarUrl: `http://www.wdwfanzone.com/blog/wp-content/uploads/2018/08/Bored.jpg`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: `Greg`,
          username: `Greggor`,
          email: `greg@hey.com`,
          hashedPassword: `OhNo`,
          biography: `I'm here to read!`,
          avatarUrl: `https://i.etsystatic.com/24852528/r/il/2fd939/2617087336/il_794xN.2617087336_qldn.jpg`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: `Ruth`,
          username: `Baby_Ruth`,
          email: `baby@hey.com`,
          hashedPassword: `OhNo`,
          biography: `I'm here to read!`,
          avatarUrl: `https://cdn.shopify.com/s/files/1/1002/6470/products/Baby_Ruth-American-Chocolate_600x.JPG?v=1516783240`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: `Jim`,
          username: `heart_of_the_bard`,
          email: `bard@hey.com`,
          hashedPassword: `OhNo`,
          biography: `I'm here to read!`,
          avatarUrl: `http://media.cntraveler.com/photos/56d88dcd7243f8953e34472d/master/pass/ottawa-rideau-canal-tout.jpg`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: `Liz`,
          username: `firbolgLover`,
          email: `love@hey.com`,
          hashedPassword: `OhNo`,
          biography: `I'm here to read!`,
          avatarUrl: `https://wizardofthetavern.com/wp-content/uploads/2019/07/druidcraft-791x1024.jpg`,
          createdAt: new Date(),
          updatedAt: new Date(),
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
