const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")
const Civ = require("./Civs")

class Leader extends Model { }

Leader.init({
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
    bio: {
        type: DataTypes.STRING,
        allownull: false
    },
    leader_bonus_name: {
        type: DataTypes.STRING,
        allownull: false
    },
    leader_bonus: {
        type: DataTypes.STRING,
        allownull: false
    },
    civ_id: {
        type: DataTypes.INTEGER,
        reference: {
            model: Civ,
            key: "id"
        }
    },
}, {
    sequelize
})

module.exports = Leader