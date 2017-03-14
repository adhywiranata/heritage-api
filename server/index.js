const express = require('express');
const routes = require('./routes/index.route');

const app = express();
app.use('/api', routes);

app.listen(1235);
// console.log('listening on port 1235');
