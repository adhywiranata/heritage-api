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

exports.createNewPlace = (req, res) => {
  PlaceModel.createNewPlace(req.body, (err, result) => {
    res.send(result);
  });
};

exports.updatePlaceById = (req, res) => {
  PlaceModel.updatePlaceById(req.params.id, req.body, (err, result) => {
    res.send(result);
  });
};

exports.removePlaceById = (req, res) => {
  PlaceModel.removePlaceById(req.params.id, (err, result) => {
    res.send(result);
  });
};
