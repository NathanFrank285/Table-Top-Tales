const express = require('express');
const profileRouter = express.Router();
const { Story, Like, User } = require('../db/models');
const { asyncHandler } = require('../utils');

profileRouter.get(`/:id`, asyncHandler(async (req, res) => {
    const { id } = req.params

    const profileUser = await User.findByPk(id, {
        include: [
            {
                model: User,
                as: "following",
            },
            {
                model: User,
                as: "follower",
                // attributes: {
                //     exclude: ["hashedPassword"]
                // }
            },
            {
                model: Story,
            }
        ]
    })

    // console.log(`user`)
    // res.json(user)
    res.render(`profile`, { profileUser, id })
}))



module.exports = profileRouter;
