const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/heritageDB');
const db = mongoose.connection;
db.on('error', () => {
  // console.log('err');
});
db.once('open', () => {
  // console.log('connected to heritageDB');
});

const PlaceSchema = mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  photoUrl: { type: String, required: true },
  location: { type: String, required: true },
  user: { type: String, required: true },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  tags: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: null },
});

PlaceSchema.statics.findAll = function findAll(cb) {
  return this.find({}, cb);
};

PlaceSchema.statics.findById = function findById(reqId, cb) {
  return this.findOne({ id: reqId }, cb);
};

PlaceSchema.statics.createNewPlace = function createNewPlace(reqPlace, cb) {
  return this.create(reqPlace, cb);
};

PlaceSchema.statics.updatePlaceById = function updatePlaceById(reqId, reqPlace, cb) {
  const options = {};
  return this.findOneAndUpdate({ id: reqId }, reqPlace, options, cb);
};

module.exports = mongoose.model('Place', PlaceSchema);
