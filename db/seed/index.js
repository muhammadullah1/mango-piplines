const mongoose = require("mongoose");
// const { User, Post, Comment, Album, Todo, Photo } = require("../../models");
const { User } = require('../../models/user.model.js');
const { default: axios } = require('axios');

async function seedData() {
  try {
    const fetchUsers = await User.find();
    console.log("-------fetched users-------", fetchUsers);

    // const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    // const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    // const comments = await axios.get('https://jsonplaceholder.typicode.com/comments');
    // const albums = await axios.get('https://jsonplaceholder.typicode.com/albums');
    // const photos = await axios.get('https://jsonplaceholder.typicode.com/photos');
    // const todos = await axios.get('https://jsonplaceholder.typicode.com/todos');

    // await User.insertMany(users.data);
    // await Post.insertMany(posts.data);
    // await Comment.insertMany(comments.data);
    // await Album.insertMany(albums.data);
    // await Photo.insertMany(photos.data);
    // await Todo.insertMany(todos.data);
  } catch (error) {
    console.log("---------seed---error---------", error);
  } finally {
    mongoose.disconnect();
  }
}

seedData();