const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('u149690965_tax', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    // Ensure SSL is not enabled if not needed
    ssl: false
  },
  // Optional: logging can be disabled or adjusted
  logging: false
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
