const express = require('express');
const { csrfProtection, asyncHandler } = require('../utils');
const { loginUser, logoutUser, requireAuth, restoreUser } = require('../auth');
const { User } = require('../db/models')
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const router = express.Router();


/* GET users listing. */

router.get('/signup', csrfProtection, asyncHandler(async (req, res, next) => {
  const user = User.build()
  res.render('signup', { csrfToken: req.csrfToken(), user });
}));


const userRegValidations = [
  //todo check username, email, password match, password, avatarUrl
]

//Insert UserValdations here
router.post('/signup', csrfProtection, userRegValidations, asyncHandler(async (req, res, next) => {
  const {
    name,
    username,
    email,
    password,
    biography,
    avatarUrl,
    confPassword
  } = req.body

  const user = User.build({
    name,
    username,
    email,
    biography,
    avatarUrl
  })

  const validatorErrors = validationResult(req);
  //add a password match validation
  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword
    user.save();
    loginUser(req, res, user);
    res.redirect('/');
  } else {
    const errors = validatorErrors.array().map((error) => error.msg)
    res.render('signup', { errors, user, csrfToken: req.csrfToken() });
  }
}));

module.exports = router;
