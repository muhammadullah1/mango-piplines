const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');

const CommentSchema = new Schema({
  postId: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate: {
      validator: (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      },
      message: 'Please provide a valid email address',
    },
  },
  body: {
    type: String,
    required: true,
  },
}, {timestamps: true});

exports.Comment = mongoose.model('Comment', CommentSchema, 'comments');