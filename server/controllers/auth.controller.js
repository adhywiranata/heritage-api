const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../../config');

const app = express();
app.set('superSecret', config.secret);

const UserModel = require('../models/user.model');

exports.createNewUser = (req, res) => {
  UserModel.createUser(req.body, (err, result) => {
    res.send(result);
  });
};

exports.validateLogin = (req, res) => {
  UserModel.validateLogin(req.body, (err, valid, user) => {
    if (valid) {
      const token = jwt.sign(user, app.get('superSecret'), {
        expiresIn: 200,
      });
      res.json({
        success: true,
        message: 'here\'s the token',
        token,
      });
    } else {
      res.sendStatus(403);
    }
  });
};
