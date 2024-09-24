const { User, Post, Comment, Album, Todo, Photo } = require('../models/index.js');
const asyncHandler  = require('../utils/asyncHandler.js');
const ApiError = require('../utils/ApiError.js');
const { default: axios } = require('axios');

module.exports = {
  seeData: asyncHandler(async (req, res, next) => {
    try {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const comments = await axios.get('https://jsonplaceholder.typicode.com/comments');
    const albums = await axios.get('https://jsonplaceholder.typicode.com/albums');
    const photos = await axios.get('https://jsonplaceholder.typicode.com/photos');
    const todos = await axios.get('https://jsonplaceholder.typicode.com/todos');

    await User.insertMany(users.data);
    await Post.insertMany(posts.data);
    await Comment.insertMany(comments.data);
    await Album.insertMany(albums.data);
    await Photo.insertMany(photos.data);
    await Todo.insertMany(todos.data);

      res.send({
        success: true,
        message: "db seeded successfully"
      });
    } catch (error) {
      next(error)
    }
  }),
}
