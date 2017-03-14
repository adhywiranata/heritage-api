var express = require('express');
var PlaceModel = require('../models/place.model');

const router = express.Router();

router.route('/').get((req, res) => {
  PlaceModel.findAll(function(err, places) {
    res.send(places);
  });
});

module.exports = router;
