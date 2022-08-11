const router = require('express').Router();
const leaderRoutes = require('./leader-routes');
const civRoutes = require("./civ-routes")
const unitRoutes = require("./unit-routes")
const buildingRoutes = require("./building-routes")
//TODO add user routes
//TODO add comments routes

//TODO add api routes
router.use('/leaders', leaderRoutes);
router.use('/civs', civRoutes);
router.use('/units', unitRoutes);
router.use('/buildings', buildingRoutes);

module.exports = router;