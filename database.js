const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root','localhost', {
  host: 'localhost',
   dialect: 'mysql'
});

module.exports = sequelize;
