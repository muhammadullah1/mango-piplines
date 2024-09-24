const mongoose = require('mongoose');
const { Schema } = mongoose;
const validator = require('validator');

const UserSchema = new Schema({
  id: {
    type: Number,
    required: [true, 'ID is required'],
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    trim: true,
    minlength: [3, 'Username must be at least 3 characters long'],
    maxlength: [30, 'Username cannot exceed 30 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    validate: {
      validator: validator.isEmail,
      message: 'Please provide a valid email address',
    },
  },
  address: {
    type: {
      street: {
        type: String,
        trim: true,
      },
      suite: {
        type: String,
        trim: true,
      },
      city: {
        type: String,
        trim: true,
      },
      zipcode: {
        type: String,
        trim: true,
      },
      geo: {
        type: {
          lat: {
            type: Number,
          },
          lng: {
            type: Number,
          },
        },
      },
    },
  },
  phone: {
    type: String,
    trim: true,
  },
  website: {
    type: String,
    trim: true,
    validate: {
      validator: validator.isURL,
      message: 'Invalid URL format for website',
    },
  },
  company: {
    type: {
      name: {
        type: String,
        trim: true,
      },
      catchPhrase: {
        type: String,
        trim: true,
      },
      bs: {
        type: String,
        trim: true,
      },
    },
  },
}, { timestamps: true });

exports.User = mongoose.model('User', UserSchema, 'users');