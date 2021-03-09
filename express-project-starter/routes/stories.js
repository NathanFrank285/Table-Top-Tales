const express = require('express')
const storiesRouter = express.Router();
const { csrfProtection, asyncHandler } = require('../utils');
const { loginUser, logoutUser, requireAuth, restoreUser } = require('../auth');
const { User, Story } = require('../db/models')
const { check, validationResult } = require('express-validator');




storiesRouter.get('/new', csrfProtection, asyncHandler( async (req, res, next) =>{
    const story = await Story.build()
    res.render('new-story', { csrfToken: req.csrfToken(), title: 'New Story', story })
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

storiesRouter.post('/new', csrfProtection, storyValidations, asyncHandler(async (req, res, next) =>{
    const {title, hook, body, picture} = req.body
    const story = Story.build({title, hook, body, picture})

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
        story.userId = req.session.auth.userId
        await story.save();
        res.redirect(`/stories/${story.id}`)
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render("new-story", { errors, story, csrfToken: req.csrfToken() });
    }


}))

storiesRouter.get('/:id')

module.exports = storiesRouter
