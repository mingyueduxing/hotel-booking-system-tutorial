
const express = require('express');
const { hotel } = require('../models')

const router = express.Router();

router.get('/', (req, res) => {
	hotel.findAll({ include: 'rooms' }).then(data => res.send(data))
});

router.post('/', (req, res) => {
	hotel.create(req.body).then(data => res.send(data))
});

module.exports = router;