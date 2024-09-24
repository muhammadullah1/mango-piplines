const { User } = require('../models/index.js')
const asyncHandler = require('../utils/asyncHandler.js')
const ApiError = require('../utils/ApiError.js')

module.exports = {
  getAllUsers: asyncHandler(async (req, res, next) => {
    try {
      const pipeline = [
        {
          $lookup: {
            from: 'posts',
            let: { userId: '$id' },
            pipeline: [
              { $match: { $expr: { $eq: ['$userId', '$$userId'] } } },
              {
                $lookup: {
                  from: 'comments',
                  let: { postId: '$id' },
                  pipeline: [
                    { $match: { $expr: { $eq: ['$postId', '$$postId'] } } },
                    { $project: { _id: 1, name: 1, email: 1, body: 1 } },
                  ],
                  as: 'comments',
                },
              },
              { $project: { _id: 1, title: 1, body: 1, comments: 1 } },
            ],
            as: 'posts',
          },
        },
        {
          $lookup: {
            from: 'albums',
            let: { userId: '$id' },
            pipeline: [
              { $match: { $expr: { $eq: ['$userId', '$$userId'] } } },
              {
                $lookup: {
                  from: 'photos',
                  let: { albumId: '$id' },
                  pipeline: [
                    { $match: { $expr: { $eq: ['$albumId', '$$albumId'] } } },
                    { $project: { _id: 1, title: 1, url: 1, thumbnailUrl: 1 } },
                  ],
                  as: 'photos',
                },
              },
              { $project: { _id: 1, title: 1, photos: 1 } },
            ],
            as: 'albums',
          },
        },
        {
          $lookup: {
            from: 'todos',
            let: { userId: '$id' },
            pipeline: [
              { $match: { $expr: { $eq: ['$userId', '$$userId'] } } },
              { $project: { _id: 1, title: 1, completed: 1 } },
            ],
            as: 'todos',
          },
        },
        {
          $project: {
            _id: 1,
            name: 1,
            username: 1,
            email: 1,
            posts: 1,
            albums: 1,
            todos: 1,
          },
        },
      ]
      const users = await User.aggregate(pipeline)

      res.send({
        success: true,
        message: 'users list',
        data: users,
      })
    } catch (error) {
      next(error)
    }
  }),
}
