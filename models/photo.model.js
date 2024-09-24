const mongoose = require('mongoose');
const { Schema } = mongoose;

const PhotoSchema = new Schema({
  albumId: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
    required: true,
  },
}, {timestamps: true});

exports.Photo = mongoose.model('Photo', PhotoSchema, 'photos');