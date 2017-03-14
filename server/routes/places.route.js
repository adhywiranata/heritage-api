const express = require('express');
const PlaceController = require('../controllers/place.controller');

const router = express.Router();

router.route('/').get(PlaceController.getPlaces);

module.exports = router;
