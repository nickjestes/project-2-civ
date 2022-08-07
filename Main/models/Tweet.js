const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tweet extends Model { }

Tweet.init(
    {
        // define columns
        // a user's post
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 241]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
        }
    },
    { sequelize });

    module.exports = Tweet;