const express = require('express')
const hotel = require('./hotel.router')
const rooms = require('./rooms.router')
const reservations = require('./reservations.router')
const user = require('./user')

const router = express.Router()

router.use('/hotel', hotel)
router.use('/rooms', rooms)
router.use('/reservations', reservations)
router.use('/user', user)

module.exports = router

