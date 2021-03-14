const express = require("express");
const app = require("../../app");
const likesRouter = express.Router();
const { csrfProtection, asyncHandler } = require("../../utils");
const {
  loginUser,
  logoutUser,
  requireAuth,
  restoreUser,
} = require("../../auth");
const { User, Follow, Like } = require("../../db/models");
const { check, validationResult } = require("express-validator");

likesRouter.post(
  `/new`,
  asyncHandler(async (req, res) => {
    const { userId, likeableId, likeableType } = req.body;
    //todo search that this like does not already exist, if not, create it
    // let likeAlive = await findOne({where: {userId, likeableId, likeableType}})
    // console.log("DOES THIS LIKE EXIST",likeAlive);
    let like = await Like.create({ userId, likeableId, likeableType });
    res.json({});
  })
);


likesRouter.delete(
  `/unlike`,
  asyncHandler(async (req, res) => {
    const { userId, likeableId, likeableType } = req.body;
    let like = await Like.findOne({where: {userId, likeableId, likeableType}})
    // let like = await Like.create({ userId, likeableId, likeableType });
    await like.destroy()
    res.json({});
  })
);

module.exports = likesRouter;
