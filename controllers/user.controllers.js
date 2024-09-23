import { User } from '../models/user.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';


export const getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find().select('-password -email');

  res.status(200).json(new ApiResponse(200, 'All users fetched successfully with related all information', users));
});
