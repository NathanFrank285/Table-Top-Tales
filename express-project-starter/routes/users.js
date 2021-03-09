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
  res.render('signup', { csrfToken: req.csrfToken(), user, title: `Sign Up` });
}));


const userRegValidations = [
  //todo check username, email, password match, password, avatarUrl
  check(`username`),
  check(`email`),
  check(`password`),
  // check()
]

//Insert UserValdations here
router.post('/signup', csrfProtection, userRegValidations, asyncHandler(async (req, res, next) => {
  const {
    name,
    username,
    email,
    hashedPassword,
    biography,
    avatarUrl,
    confirmPassword
  } = req.body
  // console.log(req.body)
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
    const newHashedPassword = await bcrypt.hash(hashedPassword, 10);
    user.hashedPassword = newHashedPassword
    await user.save();
    console.log(user)
    await loginUser(req, res, user);
    res.redirect('/');
  } else {
    const errors = validatorErrors.array().map((error) => error.msg)
    res.render('signup', { errors, user, csrfToken: req.csrfToken() });
  }
}));

router.get('/login', csrfProtection, asyncHandler(async (req, res, next) => {
  const user = User.build();
  res.render('login', { csrfToken: req.csrfToken(), title: `Log in`, user })
}))

const loginValidators = [
  check(`username`),
  check(`password`),
]

// router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res, next) => {

// }))

module.exports = router;
