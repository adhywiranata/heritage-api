const express = require('express');

const usersRoutes = require('./users.route');
const placesRoutes = require('./places.route');

const router = express.Router();

router.use('/users', usersRoutes);
router.use('/places', placesRoutes);

module.exports = router;
