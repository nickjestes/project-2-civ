const Leader = require("./Leaders")
const Civ = require("./Civs")
const Unit = require("./Unit")
const Building = require("./Building")

Leader.HasMany(Civ)

Civ.HasMany(Leader)

Unit.belongsTo(Civ)

Building.belongsTo(Civ)

module.exports = {
    Leader,
    Civ,
    Unit,
    Building
}