const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, default: '' },
  description: { type: String, default: '' },
  baseLocation: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: null },
});

UserSchema.statics.findAll = function findAll(cb) {
  return this.find({}, cb);
};

UserSchema.statics.validateLogin = function validateLogin(reqCredential, cb) {
  const userCredential = Object.assign({}, reqCredential);
  return this.findOne({
    email: userCredential.email,
  }, (err, user) => {
    if (err) { return false; }
    if (!user) { return false; }
    bcrypt.compare(userCredential.password, user.password, cb);
    return true;
  });
};

UserSchema.statics.createUser = function createUser(reqUser, cb) {
  const newUser = Object.assign({}, reqUser);
  bcrypt.hash(newUser.password, 10, (err, hash) => {
    newUser.password = hash;
    return this.create(newUser, cb);
  });
};

module.exports = mongoose.model('User', UserSchema);
