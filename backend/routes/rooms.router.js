const express = require('express');
const { rooms } = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
	res.send('rooms api reponse')
});

router.get('/:id', (req, res) => {
	res.send('room by id api reponse')
});

router.post('/', (req, res) => {
	rooms.create(req.body).then(data => res.send(data))
});

module.exports = router;