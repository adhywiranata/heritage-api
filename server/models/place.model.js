var mongoose = require('mongoose');

const PlaceSchema = mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  photoUrl: { type: String, required: true },
  location: { type: String, required: true },
  user: { type: String, required: true },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  tags: [ String ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: null }
});

exports.mongoose.model('Place', PlaceSchema);
