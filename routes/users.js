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
  check('name')
    .isLength({ max: 75 })
    .withMessage('Name must not be more than 75 characters long'),
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a username')
    .isLength({ max: 20 })
    .withMessage('Username must not be more than 20 characters long'),
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an Email Address')
    .isLength({ max: 255 })
    .withMessage('Email Address must not be more than 255 characters long')
    .isEmail()
    .withMessage('Email Address is not a valid email')
    .custom((value) => {
      return User.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),
  check('hashedPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a Password')
    .isLength({ max: 50 })
    .withMessage('Password must not be more than 50 characters long. Seriously, how long is your password?'),
  // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
  // .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")')
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Confirm Password')
    .isLength({ max: 50 })
    .withMessage('Confirm Password must not be more than 50 characters long')
    .custom((value, { req }) => {
      if (value !== req.body.hashedPassword) {
        throw new Error('Confirm Password does not match Password');
      }
      return true;
    }),
];

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
    loginUser(req, res, user);
    return req.session.save(e => {
      if (e) {
        return next(e)
      }
      return res.redirect('/');
    })
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
  check('username')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a Username'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a Password'),
];

router.post('/login', csrfProtection, loginValidators, asyncHandler(async (req, res, next) => {
  const { username, password, guest_login } = req.body;

  if (guest_login === 'true') {
    let guest_user = await User.findOne({
      where: { email: 'demo@demo.com' }
    })
    if (!guest_user) {
      guest_user = User.build({ email: 'demo@demo.com', name: 'demo', password: "demo", username: "demo", avatarUrl: "https://vignette.wikia.nocookie.net/theworldofblueteam/images/c/c2/1311156434_3.jpg/revision/latest/scale-to-width-down/180?cb=20140509155200", biography: "This is a Guest User" })
      const hashedPassword = await bcrypt.hash('password', 8);
      guest_user.hashedPassword = hashedPassword

      await guest_user.save()
    }
    loginUser(req, res, guest_user)
    return req.session.save(() => {
      res.redirect('/')
    })
  }


  const validatorErrors = validationResult(req);

  let errors = [];

  if (validatorErrors.isEmpty()) {
    const user = await User.findOne({ where: { username } });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());
      if (passwordMatch) {
        loginUser(req, res, user);
        return req.session.save(e => {
          if (e) {
            return next(e)
          }
          return res.redirect('/');
        })

      }
      else {
        errors.push('Login failed for the provided username and password');
        res.render('login', {
          title: 'Login',
          username,
          errors,
          csrfToken: req.csrfToken(),
        });
      }
    } else {
      errors.push('Login failed for the provided username and password');
      res.render('login', {
        title: 'Login',
        username,
        errors,
        csrfToken: req.csrfToken(),
      });
    }

  }
  else {
    errors = validatorErrors.array().map((error) => error.msg)

    res.render('login', {
      title: 'Login',
      username,
      errors,
      csrfToken: req.csrfToken(),
    });
  }
}))

router.post('/logout', (req, res, next) => {
  logoutUser(req, res);
  return req.session.save(e => {
    if (e) {
      return next(e)
    }
    return res.redirect('/users/login');
  })
});

module.exports = router;
