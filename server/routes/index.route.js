const express = require('express');

const usersRoutes = require('./users.route');
const placesRoutes = require('./places.route');
const authRoutes = require('./auth.route');

const router = express.Router();

router.use('/users', usersRoutes);
router.use('/places', placesRoutes);
router.use('/auth', authRoutes);

module.exports = router;
