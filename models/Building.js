const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class Building extends Model { }

Building.init({
    id: {
        type: DataTypes.INTEGER,
        allownull: false,
        PrimaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allownull: false
    },
    icon: {
        type: DataTypes.STRING,
        allownull: false
    },
    description: {
        type: DataTypes.STRING,
        allownull: false
    },
    ability_name: {
        type: DataTypes.STRING,
        allownull: false
    },
    ability: {
        type: DataTypes.STRING,
        allownull: false
    }
}, {
    sequelize
})

module.exports = Building