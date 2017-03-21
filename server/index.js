const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const routes = require('./routes/index.route');
const config = require('../config');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'test') {
  // use morgan to log at command line
  console.log('this is not test');
  app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
  // app.use(morgan('dev'));
}

mongoose.connect(config.database);
const db = mongoose.connection;
db.on('error', () => {});
db.once('open', () => {});

app.use('/api', routes);

app.listen(1235);

module.exports = app;
