const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, select: false },
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
  return this.find({
    email: reqCredential.email,
    password: reqCredential.password,
  }, cb);
};

UserSchema.statics.createUser = function createUser(reqUser, cb) {
  console.log('tessst');
  return this.create(reqUser, cb);
};

module.exports = mongoose.model('User', UserSchema);
