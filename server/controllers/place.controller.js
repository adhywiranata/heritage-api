var PlaceModel = require('../models/place.model');

exports.getPlaces = function(req, res) {
  PlaceModel.findAll(function(err, places) {
    res.send(places);
  });
}
