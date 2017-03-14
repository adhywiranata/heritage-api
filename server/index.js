var express = require('express');
var mongoose = require('mongoose');

var placesRoute = require('./routes/places');

var app = express();

app.get('/places', placesRoute.findAll);

app.get('/places/:id', placesRoute.findById);

app.listen(1234);
console.log('listening on port 1234');

mongoose.connect('mongodb://localhost/heritageDB');
var db = mongoose.connection;
db.on('error', () => {
  console.log('err');
});
db.once('open', () => {
  console.log('connected to heritageDB');
});

// Get all Places
var Place = mongoose.model('Place', placeSchema);
Place.find().then((places) => {
  console.log(places);
});

// Add new Place
var newlyAddedPlace = new Place({
  id: 7,
  title: 'lorem',
  description: 'ipsum',
  photoUrl: null,
  location: '',
  user: 'X',
  views: 0,
  likes: 0,
  tags: ['test', 'test2']
});

// newlyAddedPlace.save((err, newlyAddedPlace) => {
//   if (err) return console.error(err);
//   console.log('added!');
// });
