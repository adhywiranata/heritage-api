var express = require('express');
var PlaceController = require('../controllers/place.controller');

const router = express.Router();

router.route('/').get(PlaceController.getPlaces);

module.exports = router;
