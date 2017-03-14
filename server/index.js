var express = require('express');
var mongoose = require('mongoose');
var routes = require('./routes/index.route');

var app = express();
app.use('/api', routes);
// app.get('/places', placesRoute.findAllDB);
// app.get('/places/:id', placesRoute.findById);

app.listen(1235);
console.log('listening on port 1235');
