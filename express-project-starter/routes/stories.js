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

storiesRouter.post('/new')

module.exports = storiesRouter
