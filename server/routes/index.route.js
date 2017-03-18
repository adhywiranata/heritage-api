const express = require('express');
const jwt = require('jsonwebtoken');

const config = require('../../config');

const app = express();
app.set('superSecret', config.secret);

const usersRoutes = require('./users.route');
const placesRoutes = require('./places.route');
const authRoutes = require('./auth.route');

const router = express.Router();

router.use('/auth', authRoutes);

router.use((req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (token) {
    jwt.verify(token, app.get('superSecret'), (err, decoded) => {
      if (err) {
        return res.json({ success: false, message: 'failed to authenticate' });
      }
      req.decoded = decoded;
      next();
      return true;
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'no token provided',
    });
  }
  return true;
});

router.use('/users', usersRoutes);
router.use('/places', placesRoutes);

module.exports = router;
