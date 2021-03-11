const express = require('express')
const hotel = require('./hotel.router')
const rooms = require('./rooms.router')
const reservations = require('./reservations.router')
const user = require('./user.router')

const router = express.Router()

router.use('/hotel', hotel)
router.use('/rooms', rooms)
router.use('/reservations', reservations)
router.use('/users', user)

module.exports = router
