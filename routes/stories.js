const express = require('express')
const storiesRouter = express.Router();
const { csrfProtection, asyncHandler } = require('../utils');
const { loginUser, logoutUser, requireAuth, restoreUser } = require('../auth');
const { User, Story, Comment, Like } = require('../db/models')
const { check, validationResult } = require('express-validator');




storiesRouter.get('/new', requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
  const story = await Story.build()

  console.log("Locals:", req.locals);

  res.render("story-new", {
    csrfToken: req.csrfToken(),
    title: "New Story",
    story,
  });
}))

const storyValidations = [
  check("title")
    .isLength({ max: 255 })
    .withMessage("Name must not be more than 255 characters long")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a title"),
  check("body")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a body"),
  check("hook")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an Email Address")
    .isLength({ max: 50 })
    .withMessage("Hook must not be more than 50 characters long"),
];

storiesRouter.post('/new', csrfProtection, storyValidations, asyncHandler(async (req, res, next) => {
  //todo make sure you can only navigate to and create a story when you are logged in
  console.log(req.locals);
  const { title, hook, body, picture } = req.body;
  const story = Story.build({ title, hook, body, picture });

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    story.userId = req.session.auth.userId;
    await story.save();
    res.redirect(`/stories/${story.id}`);
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render("story-new", { errors, story, csrfToken: req.csrfToken() });
  }
}))

storiesRouter.get('/:id', asyncHandler(async (req, res, next) => {
  const storyId = req.params.id;
  const story = await Story.findOne({ where: { id: storyId }, include: { model: User, as: "author" } });
  const comments = await Comment.findAll({
    where: { storyId },
    include: [User], // , Like // Include all likes associated with this?
    order: [["id", "ASC"]] // Or maybe take each comment, find by pk,
  });               // then find all likes associated with said comment
  let storyBool = false;
  if (req.session.auth) {
    storyBool = await Like.findOne({
      where: {
        userId: req.session.auth.userId,
        likeableId: storyId,
        likeableType: "story"
      }
    })
  }
  storyBool ? storyBool = true : storyBool = false

  //todo figure out how to see what comments the user has likes or not
  const likedCommentsIds = []; // Will be filled with all the comments' likeable IDs
  if (req.session.auth){
    for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];
      const likedComment = await Like.findOne({
        where: {
          likeableType: 'comment',
          likeableId: comment.id,
          userId: req.session.auth.userId,
        }
      })
      if (likedComment) {
        likedCommentsIds.push(likedComment.likeableId)
      }
    }

    comments.forEach(comment => {
      if (likedCommentsIds.includes(comment.id)) {
        comment['commentBool'] = 'liked-true'
      }
      else {
        comment['commentBool'] = 'liked-false'
      }
    })

  }

  //follow button implementation
  const profileUser = await User.findByPk(story.author.id, {
    include: [
      {
        model: User,
        as: "following",
      },
      {
        model: User,
        as: "follower",
      },
      {
        model: Story,
      }
    ]
  })
  const followingArr = profileUser.following.map(obj => {
    return obj.id
  })
  let followData;
  let answer;

  if (req.session.auth) {
    const loggedinUser = req.session.auth.userId;

    if (followingArr.includes(loggedinUser)) {
      followData = "unfollow";
      answer = "true";
    } else {
      followData = "follow";
      answer = "false";
    }
  }

  res.render("story-view", { story, comments, storyBool, likedCommentsIds, answer, followData, profileUser });
  // res.json(res.locals)
}))

storiesRouter.get('/:id/delete', asyncHandler(async (req, res) => {
  const storyId = req.params.id;
  const story = await Story.findByPk(storyId)
  if (!res.locals.authenticated || res.locals.user.id !== story.userId) {
    res.redirect('/')
  } else {
    res.render('story-delete', { story })
  }

}))

storiesRouter.get('/:id/edit', asyncHandler(async (req, res) => {
  const storyId = req.params.id;
  const story = await Story.findByPk(storyId)
  if (!res.locals.authenticated || res.locals.user.id !== story.userId) {
    res.redirect('/')
  } else {
    res.render('story-edit', { story })
  }

}))



module.exports = storiesRouter
