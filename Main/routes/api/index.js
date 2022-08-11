const router = require('express').Router();
const countryRoutes = require('./country-routes');
// const productRoutes = require('./product-routes');
// const tagRoutes = require('./tag-routes');

//TODO add api routes
router.use('/countries', countryRoutes);
// router.use('/products', productRoutes);
// router.use('/tags', tagRoutes);

module.exports = router;
