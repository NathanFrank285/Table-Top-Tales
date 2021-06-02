const express = require("express");
const storiesApiRouter = express.Router();
const { csrfProtection, asyncHandler } = require("../../utils");
const { loginUser, logoutUser, requireAuth, restoreUser } = require("../../auth");
const { User, Story, Comment, Like } = require("../../db/models");
const { check, validationResult } = require("express-validator");

storiesApiRouter.delete(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const storyId = req.params.id;

    const story = await Story.findByPk(storyId);
    const userId = story.userId;
    await Like.destroy({where:{likeableId: story.id, likeableType: 'story'}})
    await story.destroy();

    res.json({ userId });
  })
);

storiesApiRouter.patch(
  "/:id",
  asyncHandler(async (req, res, next) => {
    const storyId = req.params.id;
    console.log(storyId, "--------------------------------");

    const story = await Story.findByPk(storyId);
    const userId = story.userId;
    await Like.destroy({where:{likeableId: story.id, likeableType: 'story'}})
    await story.destroy();

    res.json({ userId });
  })
);



module.exports = storiesApiRouter;
