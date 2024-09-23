const express = require('express');
const router = express.Router({ mergeParams: true });
const controller =  require('../controllers/user.controllers');

router.get('/', controller.getAllUsers)

module.exports = router;
