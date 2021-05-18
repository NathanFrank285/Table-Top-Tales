var express = require('express');
var router = express.Router();
const { Story, Like, User } = require('../db/models');
const { asyncHandler } = require('../utils');

const months = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`
]

/* GET home page. */
router.get('/', asyncHandler(async (req, res) => {
  const stories = await Story.findAll({
    include: [
      {
        model: User,
        as: "likingUsers",
      },
      {
        model: User,
        as: "author",
        attributes: {
          exclude: ["hashedPassword"]
        }
      }

    ], order: [["createdAt", 'DESC']], limit: 20
  });

  const topStory = stories[0]
  const sideStories = stories.slice(1, 5)
  const feed = stories.slice(5);

  res.render('index', { title: 'Welcome', topStory, sideStories, feed, months });
}));

module.exports = router;
