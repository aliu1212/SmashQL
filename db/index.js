const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'smashql',
  username: 'roo',
  password: null,
  host: 'localhost',
  logging: false,
  dialect: 'postgres',
  pool: {
    max: 8,
    min: 0,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Successfully connected to database bruh");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;