const router = require('express').Router();
// const countryRoutes = require('./countryRoutes');
const userRoutes = require('./userRoutes');
const tweetRoutes = require('./tweetRoutes');

//TODO add api routes
// router.use('/countries', countryRoutes);
router.use('/users',userRoutes);
router.use('/tweets',tweetRoutes);
//TODO: add more

module.exports = router;
