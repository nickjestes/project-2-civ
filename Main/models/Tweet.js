const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tweet extends Model { }

Tweet.init(
    {
        // define columns
        // a user's post
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 241]
            }
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    },
    { sequelize });

module.exports = Tweet;