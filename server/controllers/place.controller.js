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
  PlaceModel.createNewPlace({
    id: 2,
    title: 'Candi Prambanan Visitation',
    description: 'Candi Prambanan or Candi Rara Jonggrang is a 9th-century Hindu temple compound in Central Java, Indonesia, dedicated to the Trimurti, the expression of God as the Creator (Brahma), the Preserver (Vishnu) and the Destroyer (Shiva).',
    photoUrl: 'http://wisataterbaru.com/wp-content/uploads/2016/09/tiket-masuk-candi-prambanan.jpg',
    location: 'Central Java, Indonesia',
    user: 'Budi Nur Cahyo',
    views: 213,
    likes: 15,
    tags: ['heritage', 'indonesia', 'buddhism', 'travel'],
    createdAt: 'Fri Mar 10 2017 19:51:49 GMT+0700 (WIB)',
    updatedAt: null,
  }, (err, result) => {
    res.send(result);
  });
};
