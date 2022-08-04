const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({}); //TODO

module.exports = sequelize;
