const express = require('express');

const isAuthenticated = require('../helpers/isAuthenticated');

const usersRoutes = require('./users.route');
const placesRoutes = require('./places.route');
const authRoutes = require('./auth.route');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/users', isAuthenticated, usersRoutes);
router.use('/places', placesRoutes);

module.exports = router;
