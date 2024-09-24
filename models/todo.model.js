const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
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
  completed: {
    type: Boolean,
    required: true,
  },
}, {timestamps: true});

exports.Todo = mongoose.model('Todo', TodoSchema, 'todos');