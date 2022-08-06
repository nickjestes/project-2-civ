
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Country extends Model { }

Country.init(
    {
        // define columns
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'country',
    }
);

module.exports = Country;