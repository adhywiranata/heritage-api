var express = require('express');
var mongoose = require('mongoose');

var placesRoute = require('./routes/places');

var app = express();

app.get('/places', placesRoute.findAllDB);
app.get('/places/:id', placesRoute.findById);

app.listen(1235);
console.log('listening on port 1235');
