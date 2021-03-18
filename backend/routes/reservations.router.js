const express = require('express');
const { Reservation } = require('../models')

const router = express.Router();

router.get('/', (req, res) => {
	Reservation.findAll().then(data => res.json(data))
});

module.exports = router;