const express = require('express');
const { csrfProtection, asyncHandler } = require('../utils');
const { loginUser, logoutUser, requireAuth, restoreUser } = require('../auth');
const { User } = require('../db/models')
const router = express.Router();


/* GET users listing. */

router.get('/signup', csrfProtection, asyncHandler( async (req, res, next) => {
  const user = User.build()
  res.render('signup', {csrfToken: req.csrfToken(), user });
}));


module.exports = router;
