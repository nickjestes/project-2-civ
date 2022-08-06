const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")
const Building = require("./Building")
const Unit = require("./Unit")

class Civ extends Model { }

Civ.init({
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
    },
    unit_id: {
        type: DataTypes.INTEGER,
        reference: {
            model: Unit,
            key: "id"
        }
    },
    building_id: {
        type: DataTypes.INTEGER,
        reference: {
            model: Building,
            key: "id"
        }
    }
}, {
    sequelize
})

module.exports = Civ