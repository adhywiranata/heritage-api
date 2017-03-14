const UserModel = require('../models/user.model');

exports.getAllUsers = (req, res) => {
  UserModel.findAll((err, result) => {
    res.send(result);
  });
};

exports.createNewUser = (req, res) => {
  UserModel.createUser(req.body, (err, result) => {
    res.send(result);
  });
};

exports.validateLogin = (req, res) => {
  UserModel.validateLogin(req.body, (err, valid) => {
    console.log(valid);
    if (valid) {
      res.sendStatus(200);
    } else {
      res.sendStatus(403);
    }
  });
};
