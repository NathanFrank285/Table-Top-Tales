const express = require('express')
const app = require('../../app');
const followRouter = express.Router();
const { csrfProtection, asyncHandler } = require('../../utils');
const { loginUser, logoutUser, requireAuth, restoreUser } = require('../../auth');
const { User, Follow } = require('../../db/models')
const { check, validationResult } = require('express-validator');

followRouter.post(`/new-follow`, asyncHandler(async (req, res) => {
    const { userId, followerId } = req.body;
    if (userId === followerId) {
        const err = { msg: `You're ridiculous. You know exactly what you're doing and we don't appreciate it.` }
        return res.json(err);
    }
    const makeFollower = await Follow.create({
        userId,
        followerId
    });
    res.json({ makeFollower })
}))

followRouter.delete(`/delete-follow`, asyncHandler(async (req, res) => {
    const { userId, followerId } = req.body;
    const deleteFollower = await Follow.findOne({
        where: { userId, followerId }
    });
    deleteFollower.destroy();
    res.json(`Deleted`);
}))



module.exports = followRouter;
