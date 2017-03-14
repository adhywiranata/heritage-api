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
