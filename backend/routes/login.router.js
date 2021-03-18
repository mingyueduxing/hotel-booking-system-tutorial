const express = require('express');
const { User } = require('../models')

const router = express.Router();

router.post('/', (req, res) => {
    const { username, password } = req.body
    User.findOne({ where: { username } }).then(user => {
        const found = user.validatePassword(password, user.password)
        if(found) {
            res.status(200).json({
                message: 'login success',
            })
        } else {
            res.status(200).json({
                message: 'username and password are not correct'
            })
        }
        
    }).catch(err => {
        res.status(401).json({
            message: err
        })
    })
});

module.exports = router;