const express = require('express');
const PlaceController = require('../controllers/place.controller');

const router = express.Router();

router.route('/')
  .get(PlaceController.getPlaces)
  .post(PlaceController.createNewPlace);

router.route('/:id')
  .get(PlaceController.getPlaceById)
  .put(PlaceController.updatePlaceById)
  .delete(PlaceController.removePlaceById);

module.exports = router;
