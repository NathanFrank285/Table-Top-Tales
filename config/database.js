const {
  db: { username, password, database, host },
} = require('./index');

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: "postgres",
    seederStorage: "sequelize",
  },
  production: {
    use_env_variable:
      "postgres://ooiucnzseflzbt:86113dec5dec36d62463546abc9f09a3a8e6f5b24d34293324e0e5384fbb3cc5@ec2-54-89-49-242.compute-1.amazonaws.com:5432/d5gmtb4jbvtgno",
    dialect: "postgres",
    seederStorage: "sequelize",
  },
};
