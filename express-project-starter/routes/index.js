var express = require('express');
var router = express.Router();
const { Story, Like, User } = require('../db/models');
const { asyncHandler } = require('../utils');

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

    ]
  });

  const topStory = stories[0]
  const sideStories = stories.slice(1, 5)
  const feed = stories.slice(5);

  // console.log(stories[0])
  res.render('index', { title: 'Welcome', topStory, sideStories, feed });
  // res.json({ stories })
}));

module.exports = router;
