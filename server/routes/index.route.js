var express = require('express');
var placesRoutes = require('./places.route');

const router = express.Router();

router.use('/places', placesRoutes);

module.exports = router;
