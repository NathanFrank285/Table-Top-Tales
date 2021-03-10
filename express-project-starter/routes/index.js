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

  // console.log(stories[0])
  res.render('index', { title: 'Welcome', stories });
  // res.json({ stories })
}));

module.exports = router;
