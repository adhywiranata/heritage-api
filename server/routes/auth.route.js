const express = require('express');
const AuthController = require('../controllers/auth.controller');

const router = express.Router();

router.route('/register')
  .post(AuthController.createNewUser);

router.route('/login')
.post(AuthController.validateLogin);

module.exports = router;
