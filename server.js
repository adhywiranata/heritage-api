var express = require('express');
var placesRoute = require('./routes/places');

var app = express();

app.get('/places', placesRoute.findAll);

app.get('/places/:id', placesRoute.findById);

app.listen(1234);
console.log('listening on port 1234');
