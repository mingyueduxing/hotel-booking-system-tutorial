const express = require('express')
const hotel = require('./hotel.router')
const rooms = require('./rooms.router')
const reservations = require('./reservations.router')
const users = require('./users.router')
const images = require('./images.router')
const login = require('./login.router')

const auth = require('../middlewares/auth')

const router = express.Router()

router.use('/hotel', hotel)
router.use('/rooms', auth, rooms)
router.use('/reservations', auth, reservations)
router.use('/users', auth, users)
router.use('/images', auth, images)
router.use('/login', login)

module.exports = router

