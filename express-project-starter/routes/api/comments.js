const express = require('express')
const app = require('../../app');
const commentsRouter = express.Router();
const { csrfProtection, asyncHandler } = require('../../utils');
const { loginUser, logoutUser, requireAuth, restoreUser } = require('../../auth');
const { User, Story, Comment } = require('../../db/models')
const { check, validationResult } = require('express-validator');


commentsRouter.use(requireAuth)

// commentsRouter.get('/', asyncHandler(async (req, res) => {
//     res.json('Here is your api comments get')
// }));

commentsRouter.post('/', asyncHandler(async (req, res, next) => {
    const { commentBody, storyId } = req.body
    const userId = req.session.auth.userId
    const comment = await Comment.create({
        body: commentBody,
        userId,
        storyId
    })
    res.json({ comment })
}))



module.exports = commentsRouter
