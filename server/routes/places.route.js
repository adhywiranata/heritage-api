const express = require('express');
const PlaceController = require('../controllers/place.controller');

const router = express.Router();

router.route('/').get(PlaceController.getPlaces);
router.route('/:id').get(PlaceController.getPlaceById);

module.exports = router;
