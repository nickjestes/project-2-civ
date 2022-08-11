const router = require('express').Router();
const { Civ, Unit } = require('../../models');

router.get("/", async (req, res) => {
    try {
        const data = await Unit.findAll({
            include: [Civ]
        })
        res.json(data)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const data = await Unit.findByPk(req.params.id, {
            include: [Civ]
        })
        res.json(data)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;