var express = require('express');
var router = express.Router();
const { Story, Like, User } = require('../db/models');
const { asyncHandler } = require('../utils');

/* GET home page. */
router.get('/', asyncHandler(async (req, res) => {
  const stories = await Story.findAll({
    include: [User, Like]
  })
  res.render('index', { title: 'Welcome', stories });
}));

module.exports = router;
