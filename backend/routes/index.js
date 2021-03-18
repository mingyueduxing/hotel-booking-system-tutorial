const express = require('express')
const hotel = require('./hotel.router')
const rooms = require('./rooms.router')
const reservations = require('./reservations.router')
const users = require('./users.router')
const images = require('./images.router')

const router = express.Router()

router.use('/hotel', hotel)
router.use('/rooms', rooms)
router.use('/reservations', reservations)
router.use('/users', users)
router.use('/images', images)

module.exports = router

