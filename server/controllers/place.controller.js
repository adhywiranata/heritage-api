const PlaceModel = require('../models/place.model');

exports.getPlaces = (req, res) => {
  PlaceModel.findAll((err, places) => {
    res.send(places);
  });
};

exports.getPlaceById = (req, res) => {
  PlaceModel.findById(req.params.id, (err, places) => {
    res.send(places);
  });
};
