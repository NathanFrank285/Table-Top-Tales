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
    let likeAlive = await findOne({where: {userId, likeableId, likeableType}})
    console.log("DOES THIS LIKE EXIST",likeAlive);

    let like = await Like.create({ userId, likeableId, likeableType });

    // if (userId === followerId) {
    //   const err = {
    //     msg: `You're ridiculous. You know exactly what you're doing and we don't appreciate it.`,
    //   };
    //   return res.json(err);
    // }
    // const makeFollower = await Follow.create({
    //   userId,
    //   followerId,
    // });
    res.json( {like} );
  })
);

// likeRouter.delete(
//   `/delete-follow`,
//   asyncHandler(async (req, res) => {
//     const { userId, followerId } = req.body;
//     const deleteFollower = await Follow.findOne({
//       where: { userId, followerId },
//     });
//     deleteFollower.destroy();
//     res.json(`Deleted`);
//   })
// );

module.exports = likesRouter;
