
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection.js');

class User extends Model { }

User.init(
    {
        // define columns
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            // password has to be between 8 to 24 characters
            validate: {
                min: 8,
                max: 24
            }
        }
    },
    {
        sequelize,
        modelName: 'user',
        hooks:{
            beforeCreate:userObj=>{
                userObj.password = bcrypt.hashSync(userObj.password,4);
                return userObj;
            }
        }
    }
);


module.exports = User;
