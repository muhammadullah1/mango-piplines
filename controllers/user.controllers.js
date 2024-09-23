const { User } = require('../models/user.model.js');
const asyncHandler  = require('../utils/asyncHandler.js');
const { ApiError } = require('../utils/ApiError.js');
const { ApiResponse } = require('../utils/ApiResponse.js');

module.exports = {
  getAllUsers: asyncHandler(async (req, res, next) => {
    try {
      const users = await User.find().select('-password -email')
      res.status(200).json(new ApiResponse(200, 'Users fetched successfully', users))
    } catch (error) {
      next(new ApiError(500, 'Failed to fetch users'))
    }
  }),
}
