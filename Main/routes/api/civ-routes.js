const router = require('express').Router();
const { Leader, Civ, Unit, Building } = require('../../models');

router.get("/", async (req, res) => {
    try {
        const data = await Civ.findAll({
            include: [Leader, Unit, Building]
        })
        res.json(data)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const data = await Civ.findByPk(req.params.id, {
            include: [Leader, Unit, Building]
        })
        res.json(data)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;