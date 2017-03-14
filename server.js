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
