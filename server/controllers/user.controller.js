const UserModel = require('../models/user.model');

exports.getAllUsers = (req, res) => {
  UserModel.findAll((err, result) => {
    res.send(result);
  });
};
