const express = require('express');
const jwt = require('jsonwebtoken')
const { User } = require('../models')

const router = express.Router();

router.post('/', async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ where: { username } })

    if(!user) {
        return res.status(401).json({
            message: 'username is not found'
        })
    }

    const passwordMatched = await user.validatePassword(password, user.password)

    if (!passwordMatched) {
        return res.status(401).json({
            message: 'password is not correct'
        })
    }

    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
        expiresIn: "24h"
    });

    res.status(200).json({
        message: 'login success',
        user,
        token
    })
});

module.exports = router;