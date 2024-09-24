const mongoose = require('mongoose');
const { Schema } = mongoose;

const AlbumSchema = new Schema({
  userId: {
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
}, {timestamps: true});

exports.Album = mongoose.model('Album', AlbumSchema, 'albums');