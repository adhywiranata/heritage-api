const PlaceModel = require('../models/place.model');

exports.getPlaces = (req, res) => {
  PlaceModel.findAll((err, places) => {
    res.send(places);
  });
};
